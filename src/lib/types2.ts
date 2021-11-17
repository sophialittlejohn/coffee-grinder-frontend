import { NormalizedCacheObject } from "@apollo/client";

export type ApolloServerSideProps<
    Query = Record<string, string | number>
    > = Promise<{
        props:
        | ({
            initialApolloState: NormalizedCacheObject;
        } & Query)
        | {
            error: Error;
        };
    }>;
