export default defineEventHandler((event) => {
    const now = new Date();
    return {
      swr: 'works at ' + now
    }
  })
