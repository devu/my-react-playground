import dealsRepository from './dealsRepository'

const dealsService = () => ({
  ...dealsRepository,
  findById: async id => {
    if (!id) {
      throw new Error('The id parameter is mandatory')
    }

    return dealsRepository.findById(id)
  }
})

export default dealsService
