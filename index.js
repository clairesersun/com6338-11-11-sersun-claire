const getPoemBtn = document.getElementById('get-poem')
const poemEl = document.getElementById('poem')
const poemURL = 'https://poetrydb.org/random,linecount/1;12/author,title,lines.json'

const getJSON = url => fetch(url).then(res => res.json())

const pipe = (...fns) => firstArg => fns.reduce((returnValue, fn) => fn(returnValue), firstArg)

const makeTag = tag => str => `<${tag}>${str}</${tag}>`

// complete this function
const makePoemHTML = (poem) => {
  console.log(poem)
  //This string should consist of an h2 element containing the title of the poem
  const title = makeTag('h2')(poem[0].title)
  //an em element containing "by " and the author's name that is itself inside of an h3element, 
  const authorsNameEm = makeTag('em')(`by ${poem[0].author}`)
  const authorsName = makeTag('h3')(authorsNameEm)

  //and then paragraph elements for each stanza of the poem that contain lines separated by linebreak tags.the last line in each paragraph tag does NOT contain a linebreak element after it.
  // const poemLines = poem[0].lines
  // const breaksBetween = poemLines.map(" ", )
  
  // const poemP = makeTag('p')(poemLines)
  // const poemBr = makeTag('br')(poemP)
  
  const makePoem = `${title} ${authorsName}`
  // `${poemBr}`

  //HTML String:
  makePoem
  console.log(makePoem)
  
}

// attach a click event to #get-poem
getPoemBtn.onclick = async function() {
  // renders the HTML string returned by makePoemHTML to #poem
  poemEl.innerHTML = makePoemHTML(await getJSON(poemURL))
}
