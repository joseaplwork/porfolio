/* eslint-disable */

import * as sdk from "hypertune";

export const queryCode = `query FullQuery{root{showProjectsLink}}`;

export const query: sdk.Query<sdk.ObjectValueWithVariables> = {"variableDefinitions":{},"fragmentDefinitions":{},"fieldQuery":{"Query":{"type":"InlineFragment","objectTypeName":"Query","selection":{"root":{"fieldArguments":{"__isPartialObject__":true},"fieldQuery":{"Root":{"type":"InlineFragment","objectTypeName":"Root","selection":{"showProjectsLink":{"fieldArguments":{},"fieldQuery":null}}}}}}}}};
  
/**
 * @deprecated use '@vercel/flags/providers/hypertune' package instead.
 */
export const vercelFlagDefinitions = {"showProjectsLink":{"options":[{"label":"Off","value":false},{"label":"On","value":true}],"origin":"https://app.hypertune.com/projects/3384/main/draft/logic?selected_field_path=root%3EshowProjectsLink"}};

export type Rec = {

}

export type Rec3 = {
  id: string;
  name: string;
  email: string;
}

export const EnvironmentEnumValues = [
  "DEVELOPMENT",
  "STAGING",
  "PRODUCTION",
  "TEST"
] as const;
export type Environment = typeof EnvironmentEnumValues[number];

export type Rec2 = {
  user: Rec3;
  environment: Environment;
}

export type RootArgs = {
  context: Rec2;
}

export type Root = {
  showProjectsLink: boolean;
}

const rootFallback = {showProjectsLink:false};

export class RootNode extends sdk.Node {
  override typeName = "Root" as const;

  getRootArgs(): RootArgs {
    const { step } = this.props;
    return (step?.type === 'GetFieldStep' ? step.fieldArguments : {}) as RootArgs;
  }

  get({ fallback = rootFallback as Root}: { fallback?: Root } = {}): Root {
    const getQuery = null;
    return this.getValue({ query: getQuery, fallback }) as Root;
  }

  /**
   * [Open in Hypertune UI]({@link https://app.hypertune.com/projects/3384/main/draft/logic?selected_field_path=root%3EshowProjectsLink})
   */
  showProjectsLink({ args = {}, fallback }: { args?: Rec; fallback: boolean; }): boolean {
    const props0 = this.getFieldNodeProps("showProjectsLink", { fieldArguments: args });
    const expression0 = props0.expression;

    if (
      expression0 &&
      expression0.type === "BooleanExpression"
    ) {
      const node = new sdk.BooleanNode(props0);
      return node.get({ fallback });
    }

    const node = new sdk.BooleanNode(props0);
    node._logUnexpectedTypeError();
    return node.get({ fallback });
  }
}

/**
 * Welcome to Hypertune, the most powerful feature flag, A/B testing and app
 * configuration platform.
 * 
 * Follow the quickstart: https://docs.hypertune.com/quickstart
 * 
 * This is your schema, written in GraphQL. Use Boolean for feature flags,
 * custom enums for flags with more than two states, Int for numeric flags like
 * limits and timeouts, Strings for in-app copy, and custom object and list types
 * for more complex app configuration.
 * 
 * Once you've defined your schema, head to the Logic tab.
 */
export type Source = {
  /**
   * You can add arguments to any field in your schema, which you can then
   * reference when defining your logic. We've added a 'context' argument on your
   * root field already, which contains details of the current 'user'.
   */
  root: Root;
}

const sourceFallback = {root:{showProjectsLink:false}};

export type Rec5 = {
  args: RootArgs;
}

export type Rec4 = {
  root: Rec5;
}

/**
 * Welcome to Hypertune, the most powerful feature flag, A/B testing and app
 * configuration platform.
 * 
 * Follow the quickstart: https://docs.hypertune.com/quickstart
 * 
 * This is your schema, written in GraphQL. Use Boolean for feature flags,
 * custom enums for flags with more than two states, Int for numeric flags like
 * limits and timeouts, Strings for in-app copy, and custom object and list types
 * for more complex app configuration.
 * 
 * Once you've defined your schema, head to the Logic tab.
 */
export class SourceNode extends sdk.Node {
  override typeName = "Query" as const;

  get({ args, fallback = sourceFallback as Source}: { args: Rec4; fallback?: Source }): Source {
    const getQuery = sdk.mergeFieldQueryAndArgs(
      query.fragmentDefinitions,
      sdk.getFieldQueryForPath(query.fragmentDefinitions, query.fieldQuery, []), 
      args,
    );
    return this.getValue({ query: getQuery, fallback }) as Source;
  }

  /**
   * You can add arguments to any field in your schema, which you can then
   * reference when defining your logic. We've added a 'context' argument on your
   * root field already, which contains details of the current 'user'.
   */
  root({ args }: { args: RootArgs; }): RootNode {
    const props0 = this.getFieldNodeProps("root", { fieldArguments: args });
    const expression0 = props0.expression;

    if (
      expression0 &&
      expression0.type === "ObjectExpression" &&
      expression0.objectTypeName === "Root"
    ) {
      return new RootNode(props0);
    }

    const node = new RootNode(props0);
    node._logUnexpectedTypeError();
    return node;
  }
}

export type VariableValues = Rec;
export type DehydratedState = sdk.DehydratedState<Source, VariableValues>
export type CreateSourceOptions = { 
  token: string; 
  variableValues?: VariableValues;
  override?: sdk.DeepPartial<Source> | null;
} & sdk.CreateOptions

export function createSource({
  token,
  variableValues = {},
  override,
  ...options
}: CreateSourceOptions): SourceNode {
  return sdk.create({
    NodeConstructor: SourceNode,
    token,
    query,
    queryCode,
    variableValues,
    override,
    options,
  });
}

export const emptySource = new SourceNode({
  context: null,
  logger: null,
  parent: null,
  step: null,
  expression: null,
});

export function createSourceForServerOnly({
  token,
  variableValues = {},
  override,
  ...options
}: CreateSourceOptions): SourceNode {
  return typeof window === "undefined"
    ? createSource({ token, variableValues, override, ...options })
    : emptySource;
}

/**
 * @deprecated use createSource instead.
 */
export const initHypertune = createSource
/**
 * @deprecated use SourceNode instead.
 */
export type QueryNode = SourceNode;
/**
 * @deprecated use Source instead.
 */
export type Query = Source;
