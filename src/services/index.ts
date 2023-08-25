import { Handler } from "aws-lambda"
import axios from "axios"
import { XMLParser } from "fast-xml-parser"

export const handler: Handler = async (event, context) => {
  const res = "https://www.huffpost.com/section/us-news/feed"
  const rss = await fetchRSSFeed(res)
  const articles = await parseRSSFeed(rss)

  articles.rss.channel.item.forEach((item: any) => {
    console.log(item.title)
    console.log(item.description)
    console.log(item.link || item.guid)
    console.log(item.pubDate)
  })
  return {
    statusCode: 200,
    body: JSON.stringify({
      message: "Hello World",
    }),
  }
}

async function fetchRSSFeed(url: string): Promise<string> {
  const response = await axios.get(url)
  return response.data
}

async function parseRSSFeed(xml: string): Promise<any> {
  const parser = new XMLParser()
  return parser.parse(xml)
}
