export type JsonLdNode = Record<string, unknown>;

export function createSchemaReference(id: string) {
  return { "@id": id } as const;
}

export function createSchemaGraph(...nodes: JsonLdNode[]) {
  return {
    "@context": "https://schema.org",
    "@graph": nodes,
  } as const;
}
