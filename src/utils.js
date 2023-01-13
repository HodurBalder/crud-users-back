
module.exports = {
    metadata,
}

function metadata(page, limit, total, items, query) {

    const pages = Math.ceil(total/limit)
    const next = ((page+1)*limit) < total ? page+1 : null
    const previous = page > 0? page-1 : null

    return {
        page,
        limit,
        items,
        total,
        next,
        previous,
        pages,
        query
    }
}
