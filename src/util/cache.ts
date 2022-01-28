class localCache {
  setCache(key: string, value: any): void {
    window.localStorage.setItem(key, JSON.stringify(value))
  }

  getCache(key: string): string | undefined {
    const value = window.localStorage.getItem(key)
    if (value) {
      return JSON.parse(value)
    }
  }

  deleteCache(key: string): void {
    window.localStorage.removeItem(key)
  }

  clearCache(): void {
    window.localStorage.clear()
  }
}

export default new localCache()
