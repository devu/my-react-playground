import parse from '../../tools/parse'
import serialize from '../../tools/serialize'
import renameProperties from '../../tools/renameProperties'

const dealsTransformer = {
  fromApi: (deal = {}) => renameProperties(parse(deal), { lastAccess: 'lastAccessedByMe' }),
  allFromApi(deals = {}) {
    return {
      entries: deals.entries.map(this.fromApi),
      pagination: parse(deals.pagination)
    }
  },
  toApi: deals => serialize(deals)
}

export default dealsTransformer
