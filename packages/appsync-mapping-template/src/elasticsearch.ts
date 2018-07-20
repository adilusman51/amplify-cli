import {
    obj, Expression, str, ObjectNode
} from './ast';

export class ElasticSearchMappingTemplate {

    /**
     * Create a mapping template for ES.
     */
    public static genericTemplte({ operation, path, params }: {
        operation: Expression,
        path: Expression,
        params: Expression | ObjectNode
    }): ObjectNode {
        return obj({
            version: str('2017-02-28'),
            operation,
            path,
            params
        })
    }

    /**
     * Create a search item resolver template.
     * @param size the size limit
     * @param from the next token
     * @param query the query
     */
    public static searchItem({ query, size, from, path }: {
        path: Expression,
        query: ObjectNode | Expression,
        size: Expression,
        from?: Expression
    }): ObjectNode {
        return obj({
            version: str('2017-02-28'),
            operation: str('GET'),
            path,
            params: obj({
                body: obj({
                    from,
                    size,
                    query
                })
            })
        })
    }

    /**
     * Create a get item resolver template.
     * @param params Params to pass to the mapping template
     * @param path The resource path
     */
    public static getItem({ path }: {
        path: Expression,
    }): ObjectNode {
        return obj({
            version: str('2017-02-28'),
            operation: str('GET'),
            path,
            params: obj({})
        })
    }
}

