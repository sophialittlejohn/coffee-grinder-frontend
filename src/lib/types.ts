import { NormalizedCacheObject } from "@apollo/client";

export type ApolloServerSideProps<Query = Record<string, string | number>> = Promise<{
    props:
    | ({
        initialApolloState: NormalizedCacheObject;
        error?: undefined;
        query?: Query
    })
    | {
        error: Error;
    };
}>;
