/* eslint-disable */
import { type FlagOverridesType, decrypt, encrypt } from '@vercel/flags';
import { FlagValues } from '@vercel/flags/react';
import { cookies } from 'next/headers';

import * as hypertuneTypes from './hypertune';

export async function getVercelOverride(): Promise<hypertuneTypes.Source | null> {
  const overridesCookieValue = cookies().get('vercel-flag-overrides')?.value;

  if (!overridesCookieValue) {
    return null;
  }

  const root = (await decrypt<FlagOverridesType>(
    overridesCookieValue,
  )) as hypertuneTypes.Root;

  return { root };
}

export async function VercelFlagValues({
  flagValues,
}: {
  flagValues: hypertuneTypes.Root;
}): Promise<React.ReactElement> {
  const filteredFlagValues = Object.fromEntries(
    Object.entries(flagValues).filter(
      ([flagKey, flagValue]) => !flagKey.startsWith('__'),
    ),
  );
  const encryptedFlagValues = await encrypt(filteredFlagValues);
  return <FlagValues values={encryptedFlagValues} />;
}
