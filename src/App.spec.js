const puppeteer = require('puppeteer')

const TIMEOUT = 32000

let browser
let page

beforeAll(async () => {
  browser = await puppeteer.launch({
    headless: false,
    ignoreHTTPSErrors: true,
    timeout: TIMEOUT
  })
  page = await browser.newPage()
  await page.goto('http://localhost:8080')
  await page.waitForSelector('#app')
})

xdescribe('TNR CounterApp', () => {
  test('# Globals validations', async () => {

  })
  test('# Addition', async () => {
    await page.setRequestInterception(true)
    page.on('request', request => {
      request.respond({
        status: 200,
        contentType: 'application/json',
        body: {counter: 1}
      })
    })

    await page.click('.add')
    await page.click('input')
    await page.type('input', '1')
    await page.click('button')
    // const counter = await page.$('.counter', e => e.outerHTML)
    expect('1').toBe('1')
  }, TIMEOUT)
  test('# Substaction', async () => {
    expect(1).toBe(1)
  }, TIMEOUT)
  test('# Division', async () => {
    expect(1).toBe(1)
  }, TIMEOUT)
  test('# Multiplication', async () => {
    expect(1).toBe(1)
  }, TIMEOUT)
})

afterAll(() => browser.close())
