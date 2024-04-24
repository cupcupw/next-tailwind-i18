export interface Govern {
  title: string
  team: Team
  files: Files
}

interface Files {
  title: string
  items: Item[]
}

interface Item {
  title: string
}

interface Team {
  title: string
  blocks: Block[]
}

interface Block {
  title: string
  items: string[]
}
