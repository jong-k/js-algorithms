class TrieNode {
  constructor() {
    this.children = {};
    this.isEndOfWord = false;
  }
}

class Trie {
  constructor() {
    this.root = new TrieNode();
  }

  insert(word) {
    let node = this.root;
    for (const char of word) {
      if (!node.children[char]) node.children[char] = new TrieNode();
      node = node.children[char];
    }
    node.isEndOfWord = true;
  }

  search(word) {
    let node = this.root;
    for (const char of word) {
      if (!node.children[char]) return false;
      node = node.children[char];
    }
    return node.isEndOfWord;
  }

  startsWith(prefix) {
    let node = this.root;
    for (const char of prefix) {
      if (!node.children[char]) return false;
      node = node.children[char];
    }
    return true;
  }

  delete(word) {
    const deleteRecursively = (node, word, index = 0) => {
      if (index === word.length) {
        if (!node.isEndOfWord) return false;
        node.isEndOfWord = false;
        return Object.keys(node.children).length === 0;
      }

      const char = word[index];
      const nextNode = node.children[char];
      if (!nextNode) return false;

      const shouldDeleteCurrentNode = deleteRecursively(nextNode, word, index + 1);

      if (shouldDeleteCurrentNode) {
        delete node.children[char];
        return Object.keys(node.children).length === 0;
      }
      return false;
    };

    deleteRecursively(this.root, word);
  }

  getWordsWithPrefix(prefix) {
    const words = [];
    let node = this.root;

    // 접두사까지 노드 이동
    for (const char of prefix) {
      if (!node.children[char]) return words;
      node = node.children[char];
    }

    // DFS로 단어 수집
    const collectWords = (node, currentPrefix, results) => {
      // 현재 노드가 단어의 끝이면 결과에 추가
      if (node.isEndOfWord) results.push(currentPrefix);

      // 모든 자식 노드 탐색
      for (const char in node.children) {
        collectWords(node.children[char], currentPrefix + char, results);
      }
    };

    collectWords(node, prefix, words);
    return words;
  }
}

const trie = new Trie();

trie.insert("ca");
trie.insert("car");
trie.insert("cat");

console.log(trie.search("ca"));
console.log(trie.search("cab"));

console.log(trie.getWordsWithPrefix("ca"));
