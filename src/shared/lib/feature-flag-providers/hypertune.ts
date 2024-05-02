import { initHypertune } from './generated-hypertune';

const hypertune = initHypertune({
  token: process.env.NEXT_PUBLIC_HYPERTUNE_TOKEN!,
});

export default hypertune;
