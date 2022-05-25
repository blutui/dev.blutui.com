import glob from 'glob'

function getDocs(directory: string) {
  const files = glob.sync('**/*.md', {
    cwd: directory,
  })

  return files
}

export { getDocs }
