import React from "react";
import { graphql } from "gatsby";
import Layout from "../layouts";
import s from "./library.module.scss";
import Helmet from "react-helmet";

export default function Library({ data }) {
  const { edges } = data.allGoodreadsShelf;
  const books = edges[0].node.reviews;
  return (
    <Layout>
      <Helmet title="Charlie Harrington's Library" />
      <h1 className={s.pageTitle}>What I've Been Reading</h1>
      <div className={s.cards}>
        {books.map((book, i) => {
          return (
            <div className={s.card} key={i}>
              <div className={s.date}>
                {new Date(book.date_added).toLocaleDateString("en-US", {
                  day: "numeric",
                  month: "long",
                  year: "numeric",
                })}
              </div>
              <img
                alt={book.book.title_without_series}
                className={s.bookCover}
                src={book.book.image_url}
              />
              <div className={s.title}>
                <a href={book.link} rel="noopener noreferrer" target="_blank">
                  {book.book.title_without_series}
                </a>
              </div>
              <div>
                {book.book.authors.map((author, j) => {
                  return <div key={j}>{author.name}</div>;
                })}
              </div>
              <div>{book.book.publisher}</div>
              {book.body && <div>{book.body}</div>}
            </div>
          );
        })}
      </div>
      <table className={s.table}>
        <thead>
          <tr>
            <th>Cover</th>
            <th>Title</th>
            <th>Author(s)</th>
            <th>Date Read</th>
            <th>Publisher</th>
            <th>
              My&nbsp;
              <a
                href="https://twitter.com/search?q=%233sentence%20%40whatrocks"
                target="_blank"
                rel="noopener noreferrer"
              >
                #3sentence
              </a>
              &nbsp;review
            </th>
          </tr>
        </thead>
        <tbody>
          {books.map((book, i) => {
            /*
            if (!amazonLinkMap[book.book.id]) {
              console.log(
                `missing: ${book.book.title_without_series} :: ${book.book.id}`
              );
            }
            */
            return (
              <tr key={i}>
                <td>
                  <img
                    alt={book.book.title_without_series}
                    className={s.bookCover}
                    src={book.book.image_url}
                  />
                </td>
                <td className={s.title}>
                  <a
                    href={
                      !amazonLinkMap[book.book.id]
                        ? book.link
                        : amazonLinkMap[book.book.id]
                    }
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    {book.book.title_without_series}
                  </a>
                </td>
                <td>
                  {book.book.authors.map((author, j) => {
                    return <div key={j}>{author.name}</div>;
                  })}
                </td>
                <td>
                  {new Date(book.date_added).toLocaleDateString("en-US", {
                    day: "numeric",
                    month: "long",
                    year: "numeric",
                  })}
                </td>
                <td>{book.book.publisher}</td>
                {book.body && <td>{book.body}</td>}
              </tr>
            );
          })}
        </tbody>
      </table>
      <br />
      <p>
        <span role="img" aria-label="books">
          📚
        </span>{" "}
        My thanks to the good ol' Goodreads API for this tasty data. Also, this
        list of books I love (because I basically love every book I read) uses
        affiliate links to Amazon. If you purchase an item through one of these
        links, I receive a small kickback (often around 4-5%). Here's the full
        deal: Charlie Harrington is a participant in the Amazon Services LLC
        Associates Program, an affiliate advertising program designed to provide
        a means for sites to earn advertising fees by advertising and linking to
        Amazon.com.
      </p>
    </Layout>
  );
}

export const pageQuery = graphql`
  query libraryData {
    allGoodreadsShelf(filter: { name: { eq: "read" } }) {
      edges {
        node {
          id
          reviews {
            id
            date_added
            rating
            body
            link
            book {
              id
              title_without_series
              image_url
              publisher
              authors {
                name
              }
            }
          }
        }
      }
    }
  }
`;

const amazonLinkMap = {
  "037393a4-ebbb-509a-ad23-7cbcde4f1f61":
    "https://www.amazon.com/gp/product/163557563X/ref=as_li_qf_asin_il_tl?ie=UTF8&tag=whatrocks09-20&creative=9325&linkCode=as2&creativeASIN=163557563X&linkId=e7c7c9948f624b2457e090b1f3be7798", // piranesi
  "e233b3a1-0eaf-5c62-a705-62eb5f859507":
    "https://www.amazon.com/gp/product/0061339202/ref=as_li_qf_asin_il_tl?ie=UTF8&tag=whatrocks09-20&creative=9325&linkCode=as2&creativeASIN=0061339202&linkId=b76eed264fa980c5471f8c0cc351b2a1", //flow
  "2daa252d-30b8-593d-9ed6-a9649bc1d04e":
    "https://www.amazon.com/gp/product/0525552979/ref=as_li_qf_asin_il_tl?ie=UTF8&tag=whatrocks09-20&creative=9325&linkCode=as2&creativeASIN=0525552979&linkId=b3281433f94c8902d807f437261626f9",
  "7b924d36-091f-557d-94c7-358393794f36":
    "https://www.amazon.com/gp/product/0593117026/ref=as_li_qf_asin_il_tl?ie=UTF8&tag=whatrocks09-20&creative=9325&linkCode=as2&creativeASIN=0593117026&linkId=381edf93abd95aa7bc1d8e2199409975", // Thirteens
  "bf60138f-687e-5cb8-bda5-52e199e3930c":
    "https://www.amazon.com/gp/product/0316539538/ref=as_li_qf_asin_il_tl?ie=UTF8&tag=whatrocks09-20&creative=9325&linkCode=as2&creativeASIN=0316539538&linkId=7096dcfae5d79a0e683d93c2e0b82184", // The Silver Arrow
  "d33422f3-56ea-5401-a8d9-30ac52f50a66":
    "https://www.amazon.com/gp/product/0140386335/ref=as_li_qf_asin_il_tl?ie=UTF8&tag=whatrocks09-20&creative=9325&linkCode=as2&creativeASIN=0140386335&linkId=1ca0679baf9564bc3a744a462af5fda0", //Never ending story
  "56d9dbd0-8cfe-551b-a0fc-8d51e1671c3a":
    "https://www.amazon.com/gp/product/006210490X/ref=as_li_qf_asin_il_tl?ie=UTF8&tag=whatrocks09-20&creative=9325&linkCode=as2&creativeASIN=006210490X&linkId=a4be26c533f2a9c222a200d4fbce5c97", //school evil
  "a0623588-828a-51fc-8127-5fa1831e9fbc":
    "https://www.amazon.com/gp/product/0735211752/ref=as_li_qf_asin_il_tl?ie=UTF8&tag=whatrocks09-20&creative=9325&linkCode=as2&creativeASIN=0735211752&linkId=902d223d83283c9565dd8b12dd6aea9a", // broad band
  "0358646e-f3e9-53b6-a3d2-7f0ed3eaadfe":
    "https://www.amazon.com/gp/product/0393064417/ref=as_li_qf_asin_il_tl?ie=UTF8&tag=whatrocks09-20&creative=9325&linkCode=as2&creativeASIN=0393064417&linkId=4a64dec892537f560416ce00200c94b1", // outer lands
  "5da200e2-a391-584e-9c8c-1b67e7a987cd":
    "https://www.amazon.com/gp/product/0374514429/ref=as_li_qf_asin_il_tl?ie=UTF8&tag=whatrocks09-20&creative=9325&linkCode=as2&creativeASIN=0374514429&linkId=7d5ad52fdda91a4105774d4087ca8ee4", // pine barrens
  "d40b9ec6-c3cc-5dfa-aae9-72540cb7cc51":
    "https://www.amazon.com/gp/product/1591848261/ref=as_li_qf_asin_il_tl?ie=UTF8&tag=whatrocks09-20&creative=9325&linkCode=as2&creativeASIN=1591848261&linkId=b6a65e2fe94851b968bed62340936dd0", //anthing you want
  "30c1e90e-68b7-552c-8cce-6d7fac312fea":
    "https://www.amazon.com/gp/product/1481487736/ref=as_li_qf_asin_il_tl?ie=UTF8&tag=whatrocks09-20&creative=9325&linkCode=as2&creativeASIN=1481487736&linkId=f668c0492ceb665bcede93ea4031ce79", // starfish
  "0b9b9915-e985-5128-b91a-be4834f7886f":
    "https://www.amazon.com/gp/product/0345347951/ref=as_li_qf_asin_il_tl?ie=UTF8&tag=whatrocks09-20&creative=9325&linkCode=as2&creativeASIN=0345347951&linkId=ffebaec65d97b373096121b93afd39b4", // childhoods end
  "1b04cf66-460d-58d9-acc9-64c12ec83764":
    "https://www.amazon.com/gp/product/1250297141/ref=as_li_qf_asin_il_tl?ie=UTF8&tag=whatrocks09-20&creative=9325&linkCode=as2&creativeASIN=1250297141&linkId=9d0d28a934ad77aaad491bab1ed427d1", // oathbringer,
  "748711ae-d64b-548b-9ba5-c2608017bc19":
    "https://www.amazon.com/gp/product/0765365286/ref=as_li_qf_asin_il_tl?ie=UTF8&tag=whatrocks09-20&creative=9325&linkCode=as2&creativeASIN=0765365286&linkId=7c3b230e85458d3a01b78876a7860ab4", // words of radiance
  "e9447839-0979-5dfe-b6de-bf3b8e52e413":
    "https://www.amazon.com/gp/product/B00H25FCSQ/ref=as_li_qf_asin_il_tl?ie=UTF8&tag=whatrocks09-20&creative=9325&linkCode=as2&creativeASIN=B00H25FCSQ&linkId=d054d64632cdfe92382169259917fb81", // fifth season
  "d8b1d1cd-24b7-50e5-bc24-05761f9fab3d":
    "https://www.amazon.com/gp/product/0553293354/ref=as_li_qf_asin_il_tl?ie=UTF8&tag=whatrocks09-20&creative=9325&linkCode=as2&creativeASIN=0553293354&linkId=524a8a76acee2975c6a9b1ea1681e6ce", // foundation
  "6fe13e9d-e146-59cd-a7be-1275f65785d9":
    "https://www.amazon.com/gp/product/1732265119/ref=as_li_qf_asin_il_tl?ie=UTF8&tag=whatrocks09-20&creative=9325&linkCode=as2&creativeASIN=1732265119&linkId=39b9e6d277262210ac709f2855b9f38b", // the dream machine
  "5c9f75ce-7bbf-594b-bc8b-efba4482c031":
    "https://www.amazon.com/gp/product/1449319777/ref=as_li_qf_asin_il_tl?ie=UTF8&tag=whatrocks09-20&creative=9325&linkCode=as2&creativeASIN=1449319777&linkId=cae89556bdd639cb0ae7efb842f14eb6", // cloud architecture patterns
  "b5bb9b3f-292e-56e3-9f54-63aacae9d801":
    "https://www.amazon.com/gp/product/054792819X/ref=as_li_qf_asin_il_tl?ie=UTF8&tag=whatrocks09-20&creative=9325&linkCode=as2&creativeASIN=054792819X&linkId=09f40c27b0f6ef5e970726577f7da32a", //return of the king
  "beb7924a-1c2d-5244-810f-38f097372576":
    "https://www.amazon.com/gp/product/1250192757/ref=as_li_qf_asin_il_tl?ie=UTF8&tag=whatrocks09-20&creative=9325&linkCode=as2&creativeASIN=1250192757&linkId=041dcc62a5770e833dc59991bf57e5ee", // sourdough
  "fa4fff39-39b1-5dc4-a13f-0282762164e5":
    "https://www.amazon.com/gp/product/0307389839/ref=as_li_qf_asin_il_tl?ie=UTF8&tag=whatrocks09-20&creative=9325&linkCode=as2&creativeASIN=0307389839&linkId=59d2f242a83664a73402b2e316aae20f", // what i talk about when i talk about running
  "a77d00b5-8735-51ae-9f87-84b6ba268148":
    "https://www.amazon.com/gp/product/0547928203/ref=as_li_qf_asin_il_tl?ie=UTF8&tag=whatrocks09-20&creative=9325&linkCode=as2&creativeASIN=0547928203&linkId=5f6c71737d8642fe73475aa20f211264", // two towers
  "d192e7dc-13ca-5ec1-8ae2-37dc63c0a3a0":
    "https://www.amazon.com/gp/product/1607748894/ref=as_li_qf_asin_il_tl?ie=UTF8&tag=whatrocks09-20&creative=9325&linkCode=as2&creativeASIN=1607748894&linkId=964c14964dbe0dc13bcfacb3a3594f85", // story genius
  "78d8a077-02e1-5211-a4ec-63e68d2f28fb":
    "https://www.amazon.com/gp/product/0547928211/ref=as_li_qf_asin_il_tl?ie=UTF8&tag=whatrocks09-20&creative=9325&linkCode=as2&creativeASIN=0547928211&linkId=dc470c0a8230a08b85ae90f094338053", // fellowship of the ring
  "79df89b9-74ed-5d41-a2b8-4a88fe229ebc":
    "https://www.amazon.com/gp/product/0399182101/ref=as_li_qf_asin_il_tl?ie=UTF8&tag=whatrocks09-20&creative=9325&linkCode=as2&creativeASIN=0399182101&linkId=dccd22998789537596b65c580a860b85", // Wanderers
  "3281ab48-8917-58ce-9ebe-0acf4d386108":
    "https://www.amazon.com/gp/product/1590593898/ref=as_li_qf_asin_il_tl?ie=UTF8&tag=whatrocks09-20&creative=9325&linkCode=as2&creativeASIN=1590593898&linkId=f24cc5e9312a1a4042c6022cef678d51", // Joel on Software
  "716e07f4-672b-579b-aa31-a3f7a676615e":
    "https://www.amazon.com/gp/product/0201835959/ref=as_li_tl?ie=UTF8&camp=1789&creative=9325&creativeASIN=0201835959&linkCode=as2&tag=whatrocks09-20&linkId=a25cd95674c817aface75a02b25957c6", // The Mythical Man-Month: Essays on Software Engineering
  "79588e87-318e-5c05-9a23-d636322d850c":
    "https://www.amazon.com/gp/product/0545935210/ref=as_li_tl?ie=UTF8&camp=1789&creative=9325&creativeASIN=0545935210&linkCode=as2&tag=whatrocks09-20&linkId=0812bda16304221719282a10e4d87589", // Dog Man: A Tale of Two Kitties
  "64bc17a5-33a4-5cfc-bfa3-d0fa13797485":
    "https://www.amazon.com/gp/product/0393347818/ref=as_li_tl?ie=UTF8&camp=1789&creative=9325&creativeASIN=0393347818&linkCode=as2&tag=whatrocks09-20&linkId=b45b12f05a1b1e7b3d790f128c099678", // The New New Thing: A Silicon Valley Story
  "343e78e8-2907-51e4-a8fc-ab39fcfc9a0f":
    "https://www.amazon.com/gp/product/0545581605/ref=as_li_tl?ie=UTF8&camp=1789&creative=9325&creativeASIN=0545581605&linkCode=as2&tag=whatrocks09-20&linkId=e0302f83c5a72ed9a02a964cb8d6ba50", // Dog Man
  "faf0578b-620f-5489-a9a8-a022b64fc6ef":
    "https://www.amazon.com/gp/product/1439156816/ref=as_li_tl?ie=UTF8&camp=1789&creative=9325&creativeASIN=1439156816&linkCode=as2&tag=whatrocks09-20&linkId=dc4290e47818db79d2fa6b284f9f3e1b", // On Writing: A Memoir of the Craft
  "150b365a-4552-5f49-8c2a-f0f0ceef7750":
    "https://www.amazon.com/gp/product/0440418321/ref=as_li_tl?ie=UTF8&camp=1789&creative=9325&creativeASIN=0440418321&linkCode=as2&tag=whatrocks09-20&linkId=2fddad61e13b851c1265608ad10c2a17", // The Golden Compass
  "c97c409e-d684-57a3-a97a-a60f9f901d16":
    "https://www.amazon.com/gp/product/0887306292/ref=as_li_tl?ie=UTF8&camp=1789&creative=9325&creativeASIN=0887306292&linkCode=as2&tag=whatrocks09-20&linkId=aa33d57bb15ac443560d497734c5f361", // Hard Drive: Bill Gates and the Making of the Microsoft Empire
  "83562847-3a99-569a-abbb-6db6686c51dd":
    "https://www.amazon.com/gp/product/0465046746/ref=as_li_qf_asin_il_tl?ie=UTF8&tag=whatrocks09-20&creative=9325&linkCode=as2&creativeASIN=0465046746&linkId=2949aefc36d4bd9d9f632170d2ac23de", // Mindstorms: Children, Computers, And Powerful Ideas
  "4ae789e9-6fb1-5c9d-a5c3-f49cd1a08689":
    "https://www.amazon.com/gp/product/B07CMJ5N2R/ref=as_li_qf_asin_il_tl?ie=UTF8&tag=whatrocks09-20&creative=9325&linkCode=as2&creativeASIN=B07CMJ5N2R&linkId=6560aebe5da4cc850d0910531adb26b0", // The Power and the Glory
  "651cfc12-7db5-5de9-ad6d-0a427d115fe7":
    "https://www.amazon.com/gp/product/1982150718/ref=as_li_qf_asin_il_tl?ie=UTF8&tag=whatrocks09-20&creative=9325&linkCode=as2&creativeASIN=1982150718&linkId=0b514235818d296b5ea0fdaed85a15b5", // Things from the Flood
  "cf832c19-7728-59f5-abfd-11b7f057e345":
    "https://www.amazon.com/gp/product/054792822X/ref=as_li_qf_asin_il_tl?ie=UTF8&tag=whatrocks09-20&creative=9325&linkCode=as2&creativeASIN=054792822X&linkId=a6d0a597a37ed5a17f2c2d9cdb6f63bb", // The Hobbit, or There and Back Again
  "502f2f2c-beba-5d96-a3fc-a4e87fb047c9":
    "https://www.amazon.com/gp/product/0061478784/ref=as_li_qf_asin_il_tl?ie=UTF8&tag=whatrocks09-20&creative=9325&linkCode=as2&creativeASIN=0061478784&linkId=72a04db93c4e067e924e48c30129a6fa", // Howl's Moving Castle
  "0d1cac16-d328-59f8-b5cc-4e12ba2a31a2":
    "https://www.amazon.com/gp/product/1442429348/ref=as_li_qf_asin_il_tl?ie=UTF8&tag=whatrocks09-20&creative=9325&linkCode=as2&creativeASIN=1442429348&linkId=1e75d417c73938e393af2e39ebe7b8ab", // The Book of Lost Things
  "cfc4a76c-e6f6-5f2a-b590-f6dc63cbd2d0":
    "https://www.amazon.com/gp/product/0262532034/ref=as_li_qf_asin_il_tl?ie=UTF8&tag=whatrocks09-20&creative=9325&linkCode=as2&creativeASIN=0262532034&linkId=3306f184e14b295779207b6bf6864bfe", // A History of Modern Computing
  "5d8482a2-b153-5f8d-878b-0effcc63a0aa":
    "https://www.amazon.com/gp/product/1501142976/ref=as_li_qf_asin_il_tl?ie=UTF8&tag=whatrocks09-20&creative=9325&linkCode=as2&creativeASIN=1501142976&linkId=4f340e78468dbc1ffcee128fa4e252bb", // It
  "20f47503-e81c-59e8-aca0-0d8fcfd287e1":
    "https://www.amazon.com/gp/product/1984823795/ref=as_li_qf_asin_il_tl?ie=UTF8&tag=whatrocks09-20&creative=9325&linkCode=as2&creativeASIN=1984823795&linkId=2f0acff66834c92cc604c7380dc88056", // The Warehouse
  "743df7de-4ed8-5b34-a42b-2758f83ad260":
    "https://www.amazon.com/gp/product/0316264296/ref=as_li_qf_asin_il_tl?ie=UTF8&tag=whatrocks09-20&creative=9325&linkCode=as2&creativeASIN=0316264296&linkId=4124482ac300b2bb2a10a84f5c141aab", // Wake of Vultures
  "55e254f8-2547-5f9b-8435-6d9cf9d4763e":
    "https://www.amazon.com/gp/product/0062024736/ref=as_li_qf_asin_il_tl?ie=UTF8&tag=whatrocks09-20&creative=9325&linkCode=as2&creativeASIN=0062024736&linkId=48db4ae5770b994b81fdd5051bee16c3", // Under Wildwood
  "b4f9680d-77a6-5993-80ac-8291ffafc850":
    "https://www.amazon.com/gp/product/B004A90BQ0/ref=as_li_qf_asin_il_tl?ie=UTF8&tag=whatrocks09-20&creative=9325&linkCode=as2&creativeASIN=B004A90BQ0&linkId=97c8de152860ab7b7173d2a2224550d2", // Greenwitch
  "b95672e7-7040-56de-91ee-20b3843a8af5":
    "https://www.amazon.com/gp/product/147676669X/ref=as_li_qf_asin_il_tl?ie=UTF8&tag=whatrocks09-20&creative=9325&linkCode=as2&creativeASIN=147676669X&linkId=232564940a235bdb02c639a302ce4d65", // A Mind at Play: How Claude Shannon Invented the Information Age
  "3cc2e023-06e5-5d88-abb1-4f41b3daa249":
    "https://www.amazon.com/gp/product/0143110438/ref=as_li_qf_asin_il_tl?ie=UTF8&tag=whatrocks09-20&creative=9325&linkCode=as2&creativeASIN=0143110438&linkId=e8570cd4b10d422c7fc588a207f58a02", // A Gentleman in Moscow
  "85faec2e-dbea-571b-9d11-da92d02b074c":
    "https://www.amazon.com/gp/product/1524759783/ref=as_li_qf_asin_il_tl?ie=UTF8&tag=whatrocks09-20&creative=9325&linkCode=as2&creativeASIN=1524759783&linkId=1a0b46459cce0fdb7f3274488d974240", // Recursion
  "728d92e1-b256-5370-be6a-449b6639d1c1":
    "https://www.amazon.com/gp/product/150114152X/ref=as_li_qf_asin_il_tl?ie=UTF8&tag=whatrocks09-20&creative=9325&linkCode=as2&creativeASIN=150114152X&linkId=75804c7c39132e2e02671a9f4c8a3d93", // Born to Run
  "78e21875-17df-5f17-a7e8-67416ea84258":
    "https://www.amazon.com/gp/product/0156439611/ref=as_li_qf_asin_il_tl?ie=UTF8&tag=whatrocks09-20&creative=9325&linkCode=as2&creativeASIN=0156439611&linkId=a475b0d407c3460d392ac1e0a3de31a0", // If on a Winter's Night a Traveler
  "b69e2da2-4ddb-511d-b758-f346dd54707c": "", // ZACH-LIKE, A Game Design History
  "4526eb33-1757-5acd-8ad8-2fdb87153698":
    "https://www.amazon.com/gp/product/0441478123/ref=as_li_qf_asin_il_tl?ie=UTF8&tag=whatrocks09-20&creative=9325&linkCode=as2&creativeASIN=0441478123&linkId=b59e15a840952e25800fecaddb59934a", // The Left Hand of Darkness
  "bbaa49dd-5430-5a75-a28d-9af282197f25": "", // Commodore 64 User's Guide
  "c7a660cc-e2ef-521c-8ca8-36943892a513":
    "https://www.amazon.com/gp/product/0385480016/ref=as_li_qf_asin_il_tl?ie=UTF8&tag=whatrocks09-20&creative=9325&linkCode=as2&creativeASIN=0385480016&linkId=3cb65bd21cb9764f04be702fe152c1ff", // Bird by Bird: Some Instructions on Writing and Life
  "17750cbf-96fb-55df-86b6-308c12343c32":
    "https://www.amazon.com/gp/product/B005BH9T86/ref=as_li_qf_asin_il_tl?ie=UTF8&tag=whatrocks09-20&creative=9325&linkCode=as2&creativeASIN=B005BH9T86&linkId=51bef91bdf4765569e51a1eecb0f9f77", // Shards of Honour
  "a0a57771-2a7d-56d0-a460-6b3bf9daf03f":
    "https://www.amazon.com/gp/product/0147516145/ref=as_li_qf_asin_il_tl?ie=UTF8&tag=whatrocks09-20&creative=9325&linkCode=as2&creativeASIN=0147516145&linkId=6ed5e74b1d5211183121f6212281d641", // The Magician's Land
  "cbfc89e3-096d-5890-809b-12d89980bd06":
    "https://www.amazon.com/gp/product/0452298016/ref=as_li_qf_asin_il_tl?ie=UTF8&tag=whatrocks09-20&creative=9325&linkCode=as2&creativeASIN=0452298016&linkId=4d511ab69cfc0dca6d898ccf74beb055", // The Magician King
  "7509d80a-18f8-550c-ba64-24a566533c57":
    "https://www.amazon.com/gp/product/B002AU7MJU/ref=as_li_qf_asin_il_tl?ie=UTF8&tag=whatrocks09-20&creative=9325&linkCode=as2&creativeASIN=B002AU7MJU&linkId=484270f88fb98f66a1f912494929f317", // The Magicians
  "73deccc2-4cae-59e2-b907-642c0f967802":
    "https://www.amazon.com/gp/product/0735611319/ref=as_li_qf_asin_il_tl?ie=UTF8&tag=whatrocks09-20&creative=9325&linkCode=as2&creativeASIN=0735611319&linkId=b94205e201af1206ccac98effab39e16", // Code
  "751d3a33-f51e-5009-a6cd-5c1bdc2b07ae":
    "https://www.amazon.com/gp/product/1449363334/ref=as_li_qf_asin_il_tl?ie=UTF8&tag=whatrocks09-20&creative=9325&linkCode=as2&creativeASIN=1449363334&linkId=7484d0f1db0af31ab3d4da44ad0aee82", // Getting Started with Arduino
  "b8bd57d7-790b-5c19-a6fb-1cfdcfb0f57e":
    "https://www.amazon.com/gp/product/0547328613/ref=as_li_qf_asin_il_tl?ie=UTF8&tag=whatrocks09-20&creative=9325&linkCode=as2&creativeASIN=0547328613&linkId=f587b7905f24afc44d15b1cddbca7389", // Island of the Blue Dolphins
  "e5834734-df6d-57b3-a7b6-64114174e345":
    "https://www.amazon.com/gp/product/055327757X/ref=as_li_qf_asin_il_tl?ie=UTF8&tag=whatrocks09-20&creative=9325&linkCode=as2&creativeASIN=055327757X&linkId=ad4524fb0b15960d52d71206fd332003", // The Greatest Salesman in the World
  "ef5a3fae-c08a-5bdc-a09f-c1728f3902c0":
    "https://www.amazon.com/gp/product/B005SHX1CE/ref=as_li_qf_asin_il_tl?ie=UTF8&tag=whatrocks09-20&creative=9325&linkCode=as2&creativeASIN=B005SHX1CE&linkId=e806b8649c7fb5050287f2fcacfba679", // Falling Free
  "136a67b0-4e5a-5922-9ad0-bff760abf2ee":
    "https://www.amazon.com/gp/product/1590204018/ref=as_li_qf_asin_il_tl?ie=UTF8&tag=whatrocks09-20&creative=9325&linkCode=as2&creativeASIN=1590204018&linkId=36efa3f892d9c671db21f4a51fe358d4", // Return to the Little Kingdom: Steve Jobs, the Creation of Apple, and How It Changed the World
  "2e354cb1-b1c6-540a-89c7-0a6c8bf53a5f":
    "https://www.amazon.com/gp/product/0345539788/ref=as_li_qf_asin_il_tl?ie=UTF8&tag=whatrocks09-20&creative=9325&linkCode=as2&creativeASIN=0345539788&linkId=3008f62228e40d9da0ed6eade48895a2", // Red Rising
  "6e236e3e-b4ec-56cb-a612-99e487cb8811":
    "https://www.amazon.com/gp/product/B000FC10IO/ref=as_li_qf_asin_il_tl?ie=UTF8&tag=whatrocks09-20&creative=9325&linkCode=as2&creativeASIN=B000FC10IO&linkId=5e3e2f088fc73a78cd51d1901462076a", // Abhorsen
  "6e020f7e-1828-55a9-918b-fabfa781e1bd":
    "https://www.amazon.com/gp/product/0062315560/ref=as_li_qf_asin_il_tl?ie=UTF8&tag=whatrocks09-20&creative=9325&linkCode=as2&creativeASIN=0062315560&linkId=2b7f6c342f20473baa65e78a49d34cbd", // Lirael
  "80dfa86b-c8db-5590-8250-05e47341978a":
    "https://www.amazon.com/gp/product/1250037751/ref=as_li_qf_asin_il_tl?ie=UTF8&tag=whatrocks09-20&creative=9325&linkCode=as2&creativeASIN=1250037751&linkId=29b773b2135c7f3a6cd1b82a0f227e69", // Mr. Penumbra's 24-Hour Bookstore
  "581daf38-e752-52f3-91ea-e532c92a8c19":
    "https://www.amazon.com/gp/product/0786838655/ref=as_li_qf_asin_il_tl?ie=UTF8&tag=whatrocks09-20&creative=9325&linkCode=as2&creativeASIN=0786838655&linkId=8603317716eee702a4c0b043018fcaf6", // The Lightning Thief
  "6caa2879-93f9-5e3d-be84-963c5cf29e12":
    "https://www.amazon.com/gp/product/0062255665/ref=as_li_qf_asin_il_tl?ie=UTF8&tag=whatrocks09-20&creative=9325&linkCode=as2&creativeASIN=0062255665&linkId=d50c9617fc63ab12dae94f8461fccea9", // The Ocean at the End of the Lane
  "c542f7e1-cf8e-5380-aeac-a08be363359b":
    "https://www.amazon.com/gp/product/0689829833/ref=as_li_qf_asin_il_tl?ie=UTF8&tag=whatrocks09-20&creative=9325&linkCode=as2&creativeASIN=0689829833&linkId=831733eb75a31265e3e05ccd824ab746", // The Dark Is Rising
  "21300495-36fa-5d8d-a6ad-9aeb2928eda1":
    "https://www.amazon.com/gp/product/0316491977/ref=as_li_qf_asin_il_tl?ie=UTF8&tag=whatrocks09-20&creative=9325&linkCode=as2&creativeASIN=0316491977&linkId=f8f7bf156fbbf5ae717d81a38fe7050c", // The Soul of a New Machine
  "6e04147b-2d9d-5c31-a221-d360bde66639":
    "https://www.amazon.com/gp/product/0689711816/ref=as_li_qf_asin_il_tl?ie=UTF8&tag=whatrocks09-20&creative=9325&linkCode=as2&creativeASIN=0689711816&linkId=82acb429489d4303203abe0b2e527e14", // From the Mixed-Up Files of Mrs Basil E. Frankweiler
  "721035cc-79b2-5a8c-9c4e-e43e102c9430":
    "https://www.amazon.com/gp/product/0765365278/ref=as_li_qf_asin_il_tl?ie=UTF8&tag=whatrocks09-20&creative=9325&linkCode=as2&creativeASIN=0765365278&linkId=ff96c49479fbf7c065ff41e8ad2f36e8", // The Way of Kings
  "cec78f8a-fd59-5afc-9451-c956c02ac404":
    "https://www.amazon.com/gp/product/0765348276/ref=as_li_qf_asin_il_tl?ie=UTF8&tag=whatrocks09-20&creative=9325&linkCode=as2&creativeASIN=0765348276&linkId=b650c84d42b89f7095da77b80a22b890", // Old Man's War
  "cb7ae46b-b6aa-56e7-8758-d71dbb99ef37":
    "https://www.amazon.com/gp/product/0062024701/ref=as_li_qf_asin_il_tl?ie=UTF8&tag=whatrocks09-20&creative=9325&linkCode=as2&creativeASIN=0062024701&linkId=b55cb64a575e552e5eade17b1dd18991", // Wildwood
  "9defd108-8db8-5e10-870d-62b4afce5c8f":
    "https://www.amazon.com/gp/product/0812972155/ref=as_li_qf_asin_il_tl?ie=UTF8&tag=whatrocks09-20&creative=9325&linkCode=as2&creativeASIN=0812972155&linkId=d41617f83d9ca70f86b7ec126522e40c", // Masters of Doom: How Two Guys Created an Empire and Transformed Pop Culture
  "b47bd22d-8d96-5c9b-92c3-07114fffdd2b":
    "https://www.amazon.com/gp/product/1524764191/ref=as_li_qf_asin_il_tl?ie=UTF8&tag=whatrocks09-20&creative=9325&linkCode=as2&creativeASIN=1524764191&linkId=94f22a3b1ad453f355da25761295f487", // The Lifters
  "2151b519-2588-5b93-9bfa-27c030cc4783":
    "https://www.amazon.com/gp/product/0152047379/ref=as_li_qf_asin_il_tl?ie=UTF8&tag=whatrocks09-20&creative=9325&linkCode=as2&creativeASIN=0152047379&linkId=e5959e05e1cd4c9c7a2d5d321860d621", // The Borrowers
  "aa7d5453-ef01-5faf-96c3-050ca9f0e152":
    "https://www.amazon.com/gp/product/0765378035/ref=as_li_qf_asin_il_tl?ie=UTF8&tag=whatrocks09-20&creative=9325&linkCode=as2&creativeASIN=0765378035&linkId=fef3ede3abafe9d68b37ca209e12c2c9", // Seven Surrenders
  "01124be8-9ebd-5552-9fb5-08c2ba2b30a2":
    "https://www.amazon.com/gp/product/0262731428/ref=as_li_qf_asin_il_tl?ie=UTF8&tag=whatrocks09-20&creative=9325&linkCode=as2&creativeASIN=0262731428&linkId=25ffb28eaee40854407bdc5553034eae", // The Idea Factory: Learning to Think at MIT
  "29fc69ec-062c-59c3-aadc-cf836fabe515":
    "https://www.amazon.com/gp/product/1250170974/ref=as_li_qf_asin_il_tl?ie=UTF8&tag=whatrocks09-20&creative=9325&linkCode=as2&creativeASIN=1250170974&linkId=03eebd46951eeef42aeedb3721d1c328", // Children of Blood and Bone
  "33dd1b73-3b99-5a90-8d2e-fd12115167a3":
    "https://www.amazon.com/gp/product/0380807343/ref=as_li_qf_asin_il_tl?ie=UTF8&tag=whatrocks09-20&creative=9325&linkCode=as2&creativeASIN=0380807343&linkId=a7d50dc149a23db995e954d88c70e49d", // Coraline
  "b6376517-6c2b-5bc1-9e39-b3f13f86e204":
    "https://www.amazon.com/gp/product/1501181416/ref=as_li_qf_asin_il_tl?ie=UTF8&tag=whatrocks09-20&creative=9325&linkCode=as2&creativeASIN=1501181416&linkId=ecc5e3f2cc8d0bc645113d9081e176ca", // The Electric State
  "090788be-ce5d-5841-b9e8-76f400f461ee":
    "https://www.amazon.com/gp/product/0765386631/ref=as_li_qf_asin_il_tl?ie=UTF8&tag=whatrocks09-20&creative=9325&linkCode=as2&creativeASIN=0765386631&linkId=0dee2aaf5d24c73639bf870536d4d841", // Death's End
  "280c932b-8166-58c4-91bb-6bcdbd8418ed":
    "https://www.amazon.com/gp/product/0765386690/ref=as_li_qf_asin_il_tl?ie=UTF8&tag=whatrocks09-20&creative=9325&linkCode=as2&creativeASIN=0765386690&linkId=87bfdc219b8dc0c8f109375e9ab7777a", // The Dark Forest
  "0107084b-7901-527d-b034-16c7137fb3ca":
    "https://www.amazon.com/gp/product/0375869026/ref=as_li_qf_asin_il_tl?ie=UTF8&tag=whatrocks09-20&creative=9325&linkCode=as2&creativeASIN=0375869026&linkId=7672ce870444701b1325d2bb446c7dfc", // Wonder
  "0ddea489-8244-591c-b943-e3bc09e6b72f":
    "https://www.amazon.com/gp/product/1779501129/ref=as_li_qf_asin_il_tl?ie=UTF8&tag=whatrocks09-20&creative=9325&linkCode=as2&creativeASIN=1779501129&linkId=accb701c0b5d848aedff92f39a7555b4", // Watchmen
  "539f5751-d093-575c-a162-4baa9b79f105":
    "https://www.amazon.com/gp/product/0553418629/ref=as_li_qf_asin_il_tl?ie=UTF8&tag=whatrocks09-20&creative=9325&linkCode=as2&creativeASIN=0553418629&linkId=fa4f76cf83a2fa04f4188f54593dd997", // The Library at Mount Char
  "a4e7eace-12a8-57c8-b47e-bae71aa73f6d":
    "https://www.amazon.com/gp/product/006440188X/ref=as_li_qf_asin_il_tl?ie=UTF8&tag=whatrocks09-20&creative=9325&linkCode=as2&creativeASIN=006440188X&linkId=059a23c45b817800b6b525880303d7ed", // The Secret Garden
  "087aa06a-0a16-5a90-90d1-3e741a5328cc":
    "https://www.amazon.com/gp/product/0062073613/ref=as_li_qf_asin_il_tl?ie=UTF8&tag=whatrocks09-20&creative=9325&linkCode=as2&creativeASIN=0062073613&linkId=896d67fa6ec68df8eead8ac2a2e2f4ad", // The Body in the Library
  "8e8b4fbd-3c54-56c5-bec7-276f0edc114f":
    "https://www.amazon.com/gp/product/0375803017/ref=as_li_qf_asin_il_tl?ie=UTF8&tag=whatrocks09-20&creative=9325&linkCode=as2&creativeASIN=0375803017&linkId=e7a2ee7d06827fd05066465b679975ef", // The Halloween Tree
  "c4ddc804-89f9-55d8-8246-43f2af91d23e":
    "https://www.amazon.com/gp/product/0143122797/ref=as_li_qf_asin_il_tl?ie=UTF8&tag=whatrocks09-20&creative=9325&linkCode=as2&creativeASIN=0143122797&linkId=c43bfb9282ddb158969cebf4fbd75380", // The Idea Factory: Bell Labs and the Great Age of American Innovation
  "3b143feb-f17c-5eb6-a9a7-5b8ac5ec9927":
    "https://www.amazon.com/gp/product/1416936475/ref=as_li_qf_asin_il_tl?ie=UTF8&tag=whatrocks09-20&creative=9325&linkCode=as2&creativeASIN=1416936475&linkId=934dfece6382b124bac1dec3d6ede0ec", // Hatchet
  "bec13b80-a97a-5951-854e-4c054684cca2":
    "https://www.amazon.com/gp/product/0448089025/ref=as_li_qf_asin_il_tl?ie=UTF8&tag=whatrocks09-20&creative=9325&linkCode=as2&creativeASIN=0448089025&linkId=22d136b26d115c432135841f203b0ef6", // The House on the Cliff
  "97196efa-3270-5460-8245-c17a7a279c3e":
    "https://www.amazon.com/gp/product/B002C7Z4YQ/ref=as_li_qf_asin_il_tl?ie=UTF8&tag=whatrocks09-20&creative=9325&linkCode=as2&creativeASIN=B002C7Z4YQ&linkId=14f1b0205f72e6163bcf879f1bed9b14", // The Secret of Skull Mountain
  "71f70f4d-5b73-52f9-b3dc-c5ece081c38f":
    "https://www.amazon.com/gp/product/0765378019/ref=as_li_qf_asin_il_tl?ie=UTF8&tag=whatrocks09-20&creative=9325&linkCode=as2&creativeASIN=0765378019&linkId=64603947bd8de58899ed7309daaaf9dd", // Too Like the Lightning
  "6074ecac-14af-54fb-8be1-a430dafd75e5":
    "https://www.amazon.com/gp/product/0553560735/ref=as_li_qf_asin_il_tl?ie=UTF8&tag=whatrocks09-20&creative=9325&linkCode=as2&creativeASIN=0553560735&linkId=7975c9860844e66174a28560130002fa", // Red Mars
  "db53c158-abb1-5955-af19-54c4acb13275":
    "https://www.amazon.com/gp/product/0142302376/ref=as_li_qf_asin_il_tl?ie=UTF8&tag=whatrocks09-20&creative=9325&linkCode=as2&creativeASIN=0142302376&linkId=0a888c1a1eb9eae0a8af38ed921e49dc", // Redwall
  "63986808-1483-542e-a811-0e3870e54b16":
    "https://www.amazon.com/gp/product/0684832674/ref=as_li_qf_asin_il_tl?ie=UTF8&tag=whatrocks09-20&creative=9325&linkCode=as2&creativeASIN=0684832674&linkId=ceacc933d52904391711169c16fac843", // Where Wizards Stay Up Late: The Origins of the Internet
  "96a71ce0-cff9-5575-a2b3-9cee1fa23a42":
    "https://www.amazon.com/gp/product/B0180T0IUY/ref=as_li_qf_asin_il_tl?ie=UTF8&tag=whatrocks09-20&creative=9325&linkCode=as2&creativeASIN=B0180T0IUY&linkId=b42ba33bef87037a269d62fcb1942dc1", // Dark Matter
  "80a747a4-380b-5415-9681-f0562b337e21":
    "https://www.amazon.com/gp/product/0765348837/ref=as_li_qf_asin_il_tl?ie=UTF8&tag=whatrocks09-20&creative=9325&linkCode=as2&creativeASIN=0765348837&linkId=b0e7534de5fc9d08215fc089656a8b9d", // The Bonehunters
  "c98642f6-b90e-598b-8391-0b69c94d63fa":
    "https://www.amazon.com/gp/product/0765348829/ref=as_li_qf_asin_il_tl?ie=UTF8&tag=whatrocks09-20&creative=9325&linkCode=as2&creativeASIN=0765348829&linkId=aef91d5ace758b713aec0cd28f3d07e5", // Midnight Tides
  "c9938b55-37f4-5d9c-844e-b6074163ce43":
    "https://www.amazon.com/gp/product/0307887448/ref=as_li_qf_asin_il_tl?ie=UTF8&tag=whatrocks09-20&creative=9325&linkCode=as2&creativeASIN=0307887448&linkId=045431543c14216839f649423ff685d1", // Ready Player One
  "958be9b1-4dc5-57da-aa35-767daf2e0c04":
    "https://www.amazon.com/gp/product/1250294258/ref=as_li_qf_asin_il_tl?ie=UTF8&tag=whatrocks09-20&creative=9325&linkCode=as2&creativeASIN=1250294258&linkId=b4b2d5fee5138575a7c7e8d1fe6773e0", // Arlo Finch in the Valley of Fire
  "9ed55d66-52ff-55e6-a44a-9027a8faaf98":
    "https://www.amazon.com/gp/product/0312330537/ref=as_li_qf_asin_il_tl?ie=UTF8&tag=whatrocks09-20&creative=9325&linkCode=as2&creativeASIN=0312330537&linkId=5a888d399ad2c066493f4dd1aed77c4b", // Shantaram
  "96d07cc6-ab86-5734-8d2e-6058c91b4ea0":
    "https://www.amazon.com/gp/product/0142402575/ref=as_li_qf_asin_il_tl?ie=UTF8&tag=whatrocks09-20&creative=9325&linkCode=as2&creativeASIN=0142402575&linkId=70a9db4cce63f81e40c4ae653ad37634", // The House with a Clock in Its Walls
  "ee5bb047-99cc-51a4-a6ec-0ee71916f87d":
    "https://www.amazon.com/gp/product/0440414806/ref=as_li_qf_asin_il_tl?ie=UTF8&tag=whatrocks09-20&creative=9325&linkCode=as2&creativeASIN=0440414806&linkId=1e940c694f9cab31887e1e4838a7e3b1", // Holes
  "323c80f8-3460-5a27-ab98-81893bfd317f":
    "https://www.amazon.com/gp/product/1497642418/ref=as_li_qf_asin_il_tl?ie=UTF8&tag=whatrocks09-20&creative=9325&linkCode=as2&creativeASIN=1497642418&linkId=886dbab12a3831dfeb8deb65b048d143", // The Face in the Frost
  "2fc30d4b-e198-5d95-b7e5-62dc0e3bee58":
    "https://www.amazon.com/gp/product/B000FC13MM/ref=as_li_qf_asin_il_tl?ie=UTF8&tag=whatrocks09-20&creative=9325&linkCode=as2&creativeASIN=B000FC13MM&linkId=ec58c20c1cfdea5276911caacd6c3ae8", // Sabriel
  "3f76222a-44fe-53da-8f43-75f6f0614ddb":
    "https://www.amazon.com/gp/product/0756407915/ref=as_li_qf_asin_il_tl?ie=UTF8&tag=whatrocks09-20&creative=9325&linkCode=as2&creativeASIN=0756407915&linkId=133dbe3a1c90be71b1736d8b8928f709", // The Wise Man's Fear
  "f7992667-7071-5805-9eb4-efc2ce842770":
    "https://www.amazon.com/gp/product/075640407X/ref=as_li_qf_asin_il_tl?ie=UTF8&tag=whatrocks09-20&creative=9325&linkCode=as2&creativeASIN=075640407X&linkId=bc6f7abe8905e9a346501239c4a92b52", // The Name of the Wind
  "4409e65f-4d2b-53a6-aa30-a94eabd38e66":
    "https://www.amazon.com/gp/product/185723457X/ref=as_li_qf_asin_il_tl?ie=UTF8&tag=whatrocks09-20&creative=9325&linkCode=as2&creativeASIN=185723457X&linkId=85121029e4afbe8bf22e29acf38a3fc6", // Excession
  "5b3f2e42-8742-59bb-ba12-c31ae61e491e":
    "https://www.amazon.com/gp/product/0143119605/ref=as_li_qf_asin_il_tl?ie=UTF8&tag=whatrocks09-20&creative=9325&linkCode=as2&creativeASIN=0143119605&linkId=ae5ced58943edca12e0d6c6976177f0c", // The Last Stand: Custer, Sitting Bull, and the Battle of the Little Bighorn
  "79e9ea7a-468a-5126-847a-b6bd47bf4031":
    "https://www.amazon.com/gp/product/1439108242/ref=as_li_qf_asin_il_tl?ie=UTF8&tag=whatrocks09-20&creative=9325&linkCode=as2&creativeASIN=1439108242&linkId=abae5788973d0890d3b322364215d6ac", // Season of the Witch: Enchantment, Terror and Deliverance in the City of Love
  "46926969-0766-5843-9c3f-47a67abe0f67":
    "https://www.amazon.com/gp/product/1585671827/ref=as_li_qf_asin_il_tl?ie=UTF8&tag=whatrocks09-20&creative=9325&linkCode=as2&creativeASIN=1585671827&linkId=bcbca7b6fb791774ab91fe02797fca5d", // Shardik
  "e91cc296-d39d-5b79-bbef-4849cd79e7c3":
    "https://www.amazon.com/gp/product/0765348810/ref=as_li_qf_asin_il_tl?ie=UTF8&tag=whatrocks09-20&creative=9325&linkCode=as2&creativeASIN=0765348810&linkId=4f6f81b549b0932289eb5ca1c3f053cf", // House of Chains
  "53ba987a-0aef-533a-bbae-957b9555a75d":
    "https://www.amazon.com/gp/product/1416567224/ref=as_li_qf_asin_il_tl?ie=UTF8&tag=whatrocks09-20&creative=9325&linkCode=as2&creativeASIN=1416567224&linkId=907470bfc59f491c09d0f5105b0beed8", // The Finest Hours: The True Story of the U.S. Coast Guard's Most Daring Sea Rescue
  "4e50e379-9590-5258-a6fd-5206d599cd5d":
    "https://www.amazon.com/gp/product/014023828X/ref=as_li_qf_asin_il_tl?ie=UTF8&tag=whatrocks09-20&creative=9325&linkCode=as2&creativeASIN=014023828X&linkId=5854a262d3da43011c1c464d5ada0c01", // The Tortilla Curtain
  "79634f22-ae09-50d0-af77-584f868a3e4b":
    "https://www.amazon.com/gp/product/0765348802/ref=as_li_qf_asin_il_tl?ie=UTF8&tag=whatrocks09-20&creative=9325&linkCode=as2&creativeASIN=0765348802&linkId=077c1e46c102aef9b13a5aca5c3dd646", // Memories of Ice
  "fe5aa38a-5f8a-51ae-bccd-7bb029c2ab65":
    "https://www.amazon.com/gp/product/0316129089/ref=as_li_qf_asin_il_tl?ie=UTF8&tag=whatrocks09-20&creative=9325&linkCode=as2&creativeASIN=0316129089&linkId=3d52194c41a75f829ad8cf3dd0c58546", // Leviathan Wakes
  "d857933f-2d2b-5578-b955-a9c119c6199f":
    "https://www.amazon.com/gp/product/0449912558/ref=as_li_qf_asin_il_tl?ie=UTF8&tag=whatrocks09-20&creative=9325&linkCode=as2&creativeASIN=0449912558&linkId=335d33e07c1d5ae3bc57535131d48f59", // The Sparrow
  "f71d00a7-8e3c-5270-8935-775cdf28bc4a":
    "https://www.amazon.com/gp/product/0765348799/ref=as_li_qf_asin_il_tl?ie=UTF8&tag=whatrocks09-20&creative=9325&linkCode=as2&creativeASIN=0765348799&linkId=3bbbad051e08f76cf0168b3c968bb4e3", // Deadhouse Gates
  "34fa0c07-67b9-50cc-89e8-1cc31927c976":
    "https://www.amazon.com/gp/product/067976397X/ref=as_li_qf_asin_il_tl?ie=UTF8&tag=whatrocks09-20&creative=9325&linkCode=as2&creativeASIN=067976397X&linkId=47bb5b83eec3651b0fd8468a6a0dc653", // Corelli's Mandolin
  "1f23a528-41d4-5e50-9508-4173c2230396":
    "https://www.amazon.com/gp/product/B00TOT9LEY/ref=as_li_qf_asin_il_tl?ie=UTF8&tag=whatrocks09-20&creative=9325&linkCode=as2&creativeASIN=B00TOT9LEY&linkId=a8580e2e187cd3050be1f21d4bd2c595", // Ancillary Mercy
  "fbd8958a-04ec-57bf-9172-af1cbbe5e946":
    "https://www.amazon.com/gp/product/0553288202/ref=as_li_qf_asin_il_tl?ie=UTF8&tag=whatrocks09-20&creative=9325&linkCode=as2&creativeASIN=0553288202&linkId=71b5f944ec01a1d3cb9c920e7eef4ec1", // The Fall of Hyperion
  "bc1c97f5-ad1c-58c5-9bde-455508dcbf72":
    "https://www.amazon.com/gp/product/B004G60EHS/ref=as_li_qf_asin_il_tl?ie=UTF8&tag=whatrocks09-20&creative=9325&linkCode=as2&creativeASIN=B004G60EHS&linkId=9b914cfd2d88343313ce615eb1e04e91", // Hyperion
  "87d98b3a-4090-5aa5-8af5-d68da5a370e1":
    "https://www.amazon.com/gp/product/0143119761/ref=as_li_qf_asin_il_tl?ie=UTF8&tag=whatrocks09-20&creative=9325&linkCode=as2&creativeASIN=0143119761&linkId=d5becc9b73b28b0f9e139e052d50857c", // A Perfect Spy
  "abd84ba0-9e35-5b11-bcd6-9719b4e130dd":
    "https://www.amazon.com/gp/product/0395957737/ref=as_li_qf_asin_il_tl?ie=UTF8&tag=whatrocks09-20&creative=9325&linkCode=as2&creativeASIN=0395957737&linkId=bb5ac9d065b29d7a88c78e2398cc1bef", // Shoeless Joe
  "73137d63-4fc4-59cb-9113-8b475ce1168a":
    "https://www.amazon.com/gp/product/0684857553/ref=as_li_qf_asin_il_tl?ie=UTF8&tag=whatrocks09-20&creative=9325&linkCode=as2&creativeASIN=0684857553&linkId=4793f13038a238b04749e6589561d1e4", // Comanche Moon
  "97171bdf-0d9a-51d0-b36e-783760ec8c57":
    "https://www.amazon.com/gp/product/1493017829/ref=as_li_qf_asin_il_tl?ie=UTF8&tag=whatrocks09-20&creative=9325&linkCode=as2&creativeASIN=1493017829&linkId=07dfc2090e91c4752610360bff58743d", // Be Iron Fit, 2nd: Time-Efficient Training Secrets for Ultimate Fitness
  "a3162fff-b52b-59d2-a5cb-f16e63877c69":
    "https://www.amazon.com/gp/product/0316923354/ref=as_li_qf_asin_il_tl?ie=UTF8&tag=whatrocks09-20&creative=9325&linkCode=as2&creativeASIN=0316923354&linkId=8487ba7db3659b1c6e6167317091d858", // Beautiful Swimmers: Watermen, Crabs and the Chesapeake Bay
  "70403809-28f7-57f6-a5c5-558b6fd5dcc0":
    "https://www.amazon.com/gp/product/1451678193/ref=as_li_qf_asin_il_tl?ie=UTF8&tag=whatrocks09-20&creative=9325&linkCode=as2&creativeASIN=1451678193&linkId=e362dc80f610191be552246794aaebb1", // The Martian Chronicles
  "7fbbe76b-83b2-54ff-94df-802caab81be1":
    "https://www.amazon.com/gp/product/0374528373/ref=as_li_qf_asin_il_tl?ie=UTF8&tag=whatrocks09-20&creative=9325&linkCode=as2&creativeASIN=0374528373&linkId=73982172a12b156036effc566a6c4392", // The Brothers Karamazov
  "2c3eab57-058f-5e16-8fba-883dd2fc5d51":
    "https://www.amazon.com/gp/product/0679775439/ref=as_li_qf_asin_il_tl?ie=UTF8&tag=whatrocks09-20&creative=9325&linkCode=as2&creativeASIN=0679775439&linkId=945c51778f044a3e8f80c94c9f136bed", // The Wind-Up Bird Chronicle
  "3465eee0-cfab-5550-bd36-b7dc11bfc26d":
    "https://www.amazon.com/gp/product/B00I8289A0/ref=as_li_qf_asin_il_tl?ie=UTF8&tag=whatrocks09-20&creative=9325&linkCode=as2&creativeASIN=B00I8289A0&linkId=2eaf8cf98e708ad326b6a85fb61c0f9c", // Ancillary Sword
  "33b6438f-7d51-58ed-8a2b-48ec69a6f9a1":
    "https://www.amazon.com/gp/product/B00BAXFDLM/ref=as_li_qf_asin_il_tl?ie=UTF8&tag=whatrocks09-20&creative=9325&linkCode=as2&creativeASIN=B00BAXFDLM&linkId=8521d53ece6c236f80a7834b67e56223", // Ancillary Justice
  "170b9cc2-183b-52de-ba38-defe3b446b4c":
    "https://www.amazon.com/gp/product/037572706X/ref=as_li_qf_asin_il_tl?ie=UTF8&tag=whatrocks09-20&creative=9325&linkCode=as2&creativeASIN=037572706X&linkId=a745b8748fe507c024f36e54ac96f3ac", // Julian
  "bfb3c1f3-ffe1-539c-8c2f-44b7a3a988fc":
    "https://www.amazon.com/gp/product/0062334514/ref=as_li_qf_asin_il_tl?ie=UTF8&tag=whatrocks09-20&creative=9325&linkCode=as2&creativeASIN=0062334514&linkId=68f011d8efec57b986f81a0d5beb890d", // Seveneves
  "733a4286-85e7-5c4f-858b-48241d6f3de1":
    "https://www.amazon.com/gp/product/0060742763/ref=as_li_qf_asin_il_tl?ie=UTF8&tag=whatrocks09-20&creative=9325&linkCode=as2&creativeASIN=0060742763&linkId=36283f2785e7fe69821599b37152612b", // Setting the Table: The Transforming Power of Hospitality in Business
  "05114f2e-ab83-57e9-892b-98369e736ee2":
    "https://www.amazon.com/gp/product/1853260401/ref=as_li_qf_asin_il_tl?ie=UTF8&tag=whatrocks09-20&creative=9325&linkCode=as2&creativeASIN=1853260401&linkId=369ad50f17ef36e123915c9ca4131488", // The Three Musketeers
  "97ebe08e-3263-5f09-9906-c1f39f5b7a2d":
    "https://www.amazon.com/gp/product/032194206X/ref=as_li_qf_asin_il_tl?ie=UTF8&tag=whatrocks09-20&creative=9325&linkCode=as2&creativeASIN=032194206X&linkId=10c03c41a0d90f3761524f41e376215e", // Objective-C Programming: The Big Nerd Ranch Guide
  "7e5d9507-d246-5dd0-9547-b9da120fde58":
    "https://www.amazon.com/gp/product/015603008X/ref=as_li_qf_asin_il_tl?ie=UTF8&tag=whatrocks09-20&creative=9325&linkCode=as2&creativeASIN=015603008X&linkId=5797ef66ea16658e50c9bf0c29a8c116", // Flowers for Algernon
  "6401792f-4f0d-5275-ad12-3d0c87208beb": "", // Harry Potter and the Methods of Rationality
  "491ff3cd-e22f-5aa4-bdca-87000b7cb603":
    "https://www.amazon.com/gp/product/0345350499/ref=as_li_qf_asin_il_tl?ie=UTF8&tag=whatrocks09-20&creative=9325&linkCode=as2&creativeASIN=0345350499&linkId=6245102a83d3710d6386b9681fc5c2b7", // The Mists of Avalon
  "8d6a0387-df35-5e5b-9179-360c79a1a496":
    "https://www.amazon.com/gp/product/0140053204/ref=as_li_qf_asin_il_tl?ie=UTF8&tag=whatrocks09-20&creative=9325&linkCode=as2&creativeASIN=0140053204&linkId=9a58aa400b3d4497c3eb61967741b65c", // Travels with Charley
  "0f73b999-a830-5452-83eb-e7cc80aac268":
    "https://www.amazon.com/gp/product/0268010048/ref=as_li_qf_asin_il_tl?ie=UTF8&tag=whatrocks09-20&creative=9325&linkCode=as2&creativeASIN=0268010048&linkId=82c7100bc9afcad829b3acec6bf83c34", // A General Theory of Authority
  "1316a7b7-b92a-5dd3-8625-bce271d4f600":
    "https://www.amazon.com/gp/product/0743482859/ref=as_li_qf_asin_il_tl?ie=UTF8&tag=whatrocks09-20&creative=9325&linkCode=as2&creativeASIN=0743482859&linkId=a625404e70d1fa1b86128a3894ae9a50", // Antony and Cleopatra
  "29dba6ac-192d-5d29-bd51-1e3779d24871":
    "https://www.amazon.com/gp/product/0553384619/ref=as_li_qf_asin_il_tl?ie=UTF8&tag=whatrocks09-20&creative=9325&linkCode=as2&creativeASIN=0553384619&linkId=69ea9bcbbbda91fe91951eceea06e054", // The Snowball: Warren Buffett and the Business of Life
  "cb8bea27-1a51-5ad9-861e-b1a8725c2005":
    "https://www.amazon.com/gp/product/0061120057/ref=as_li_qf_asin_il_tl?ie=UTF8&tag=whatrocks09-20&creative=9325&linkCode=as2&creativeASIN=0061120057&linkId=d4932ce6b06e961279b9cd526687d99e", // Little, Big
  "8ad5dd27-bed4-503b-a484-370266ecd689":
    "https://www.amazon.com/gp/product/0765382032/ref=as_li_qf_asin_il_tl?ie=UTF8&tag=whatrocks09-20&creative=9325&linkCode=as2&creativeASIN=0765382032&linkId=9bb7e145d53f482982dfb4f59268c8f6", // The Three-Body Problem
  "43d72363-9ce6-53fc-b352-3f69c275d114":
    "https://www.amazon.com/gp/product/0374529264/ref=as_li_qf_asin_il_tl?ie=UTF8&tag=whatrocks09-20&creative=9325&linkCode=as2&creativeASIN=0374529264&linkId=a629cbd0193749561c3c876f401167ce", // Memoirs of Hadrian
  "77e95540-85d5-568a-b2ff-ee148bca3640":
    "https://www.amazon.com/gp/product/0812515285/ref=as_li_qf_asin_il_tl?ie=UTF8&tag=whatrocks09-20&creative=9325&linkCode=as2&creativeASIN=0812515285&linkId=43d4da71635cf0caaa5caa23b7bf8440", // A Fire Upon the Deep
  "e132cdcc-bd7a-5b98-9871-7deeb903e8e1":
    "https://www.amazon.com/gp/product/0812536363/ref=as_li_qf_asin_il_tl?ie=UTF8&tag=whatrocks09-20&creative=9325&linkCode=as2&creativeASIN=0812536363&linkId=e93f3725b31ec8885e4f6cc2d4eae12a", // Rainbows End
  "35f4addf-6fed-5fe4-8439-d77dd6028491":
    "https://www.amazon.com/gp/product/0380788624/ref=as_li_qf_asin_il_tl?ie=UTF8&tag=whatrocks09-20&creative=9325&linkCode=as2&creativeASIN=0380788624&linkId=8713ca0bf0aa5404a3c088c8fe363a3a", // Cryptonomicon
  "ae9d0f4f-3823-5221-92b3-ecdd81fa8852":
    "https://www.amazon.com/gp/product/0393355624/ref=as_li_qf_asin_il_tl?ie=UTF8&tag=whatrocks09-20&creative=9325&linkCode=as2&creativeASIN=0393355624&linkId=260aa3eb37037bcc3f2000af2159dd3c", // Surely You're Joking, Mr. Feynman!: Adventures of a Curious Character
  "03d57a71-e169-5930-a5dc-ecaa1570449a":
    "https://www.amazon.com/gp/product/0802149073/ref=as_li_qf_asin_il_tl?ie=UTF8&tag=whatrocks09-20&creative=9325&linkCode=as2&creativeASIN=0802149073&linkId=70a65b9c1f8703b5aed5be87231ead95", // This Boy's Life
  "d89376b2-8a7e-569a-a03f-f4cd4bacb462":
    "https://www.amazon.com/gp/product/0441627404/ref=as_li_qf_asin_il_tl?ie=UTF8&tag=whatrocks09-20&creative=9325&linkCode=as2&creativeASIN=0441627404&linkId=29e270c210d49e902831016818480042", // The Once and Future King
  "2f0b8a41-aa27-550f-9f3f-58507526a701":
    "https://www.amazon.com/gp/product/038549081X/ref=as_li_qf_asin_il_tl?ie=UTF8&tag=whatrocks09-20&creative=9325&linkCode=as2&creativeASIN=038549081X&linkId=a582ad53ae1e9c89b00f650e924277c1", // The Handmaid's Tale
  "35cfceae-cb95-5053-bee2-1e181fd5da06":
    "https://www.amazon.com/gp/product/0804139296/ref=as_li_qf_asin_il_tl?ie=UTF8&tag=whatrocks09-20&creative=9325&linkCode=as2&creativeASIN=0804139296&linkId=36601950e43cff886508eb196ee6ec99", // Zero to One: Notes on Startups, or How to Build the Future
  "e060aceb-e91e-5f41-b767-7504be190440":
    "https://www.amazon.com/gp/product/B000FBJAGO/ref=as_li_qf_asin_il_tl?ie=UTF8&tag=whatrocks09-20&creative=9325&linkCode=as2&creativeASIN=B000FBJAGO&linkId=7680f28cb2467f67d03914efe109ce80", // A Deepness in the Sky
  "51fcdea3-221b-522e-b39d-9305d5eac41b":
    "https://www.amazon.com/gp/product/0553273817/ref=as_li_qf_asin_il_tl?ie=UTF8&tag=whatrocks09-20&creative=9325&linkCode=as2&creativeASIN=0553273817&linkId=1e02fa15fffd89ad733ef7bf22b71818", // A Canticle for Leibowitz
  "09f425af-99ba-593d-b004-2c4ede26e9d8":
    "https://www.amazon.com/gp/product/0679760806/ref=as_li_qf_asin_il_tl?ie=UTF8&tag=whatrocks09-20&creative=9325&linkCode=as2&creativeASIN=0679760806&linkId=478424c34099536cc48a3818b55ad55b", // The Master and Margarita
  "61fd5cb8-cc45-560d-9d59-d20f614589b5":
    "https://www.amazon.com/gp/product/0316066524/ref=as_li_qf_asin_il_tl?ie=UTF8&tag=whatrocks09-20&creative=9325&linkCode=as2&creativeASIN=0316066524&linkId=f70d4c25ceba40dbb048fb0ad78fc585", // Infinite Jest
  "c8afccf0-66b7-5ca0-8a34-d6ccd17b415f":
    "https://www.amazon.com/gp/product/1401207529/ref=as_li_qf_asin_il_tl?ie=UTF8&tag=whatrocks09-20&creative=9325&linkCode=as2&creativeASIN=1401207529&linkId=c623ca20ceb13b358c41d324af47e21d", // Batman: Year One
  "e7b2d169-7276-51fb-a5f1-b71a38230426": "", // Selected Works
  "6f3c34ca-c6d3-5db3-83bc-7482ff46aba6":
    "https://www.amazon.com/gp/product/0143034901/ref=as_li_qf_asin_il_tl?ie=UTF8&tag=whatrocks09-20&creative=9325&linkCode=as2&creativeASIN=0143034901&linkId=484aa7430c3a63312adf264c1b4585df", // The Shadow of the Wind
  "559b400e-c7bb-5dd2-82cd-b8955766d1c7":
    "https://www.amazon.com/gp/product/0300093012/ref=as_li_qf_asin_il_tl?ie=UTF8&tag=whatrocks09-20&creative=9325&linkCode=as2&creativeASIN=0300093012&linkId=983824d82b8c2495d0cf51db9a019ff6", // London Journal, 1762-1763
  "055d2f52-b9d0-5f0f-bbae-d76b3ac4ceea":
    "https://www.amazon.com/gp/product/1612185541/ref=as_li_qf_asin_il_tl?ie=UTF8&tag=whatrocks09-20&creative=9325&linkCode=as2&creativeASIN=1612185541&linkId=5291455093ee1126c87ca7a50eea9d13", // Thrilling Cities
  "10a24726-a981-5b9d-ba82-930903a4a020":
    "https://www.amazon.com/gp/product/B000FC0VVQ/ref=as_li_qf_asin_il_tl?ie=UTF8&tag=whatrocks09-20&creative=9325&linkCode=as2&creativeASIN=B000FC0VVQ&linkId=06e4a08d87a6ff5acfb9a3a7f54fd100", // Truman
  "042dd0c1-503e-5e54-8d3e-525afa65a8c3":
    "https://www.amazon.com/gp/product/089870183X/ref=as_li_qf_asin_il_tl?ie=UTF8&tag=whatrocks09-20&creative=9325&linkCode=as2&creativeASIN=089870183X&linkId=f948aec8959b631cac3d6b85f0ac1318", // Another Sort of Learning
  "91d3b209-06f2-527d-b7fd-6250257517ee":
    "https://www.amazon.com/gp/product/0316296198/ref=as_li_qf_asin_il_tl?ie=UTF8&tag=whatrocks09-20&creative=9325&linkCode=as2&creativeASIN=0316296198&linkId=69e1a7f362d9758a4db63f0358f29483", // The Magus
  "21ba9212-119a-5b1b-af8d-c3b1ee85b01a":
    "https://www.amazon.com/gp/product/1451648537/ref=as_li_qf_asin_il_tl?ie=UTF8&tag=whatrocks09-20&creative=9325&linkCode=as2&creativeASIN=1451648537&linkId=a2aef039c3a221fa872180f61666db86", // Steve Jobs
  "9e23dee7-1999-5607-808f-4d464d930a65":
    "https://www.amazon.com/gp/product/B000FC1AAW/ref=as_li_qf_asin_il_tl?ie=UTF8&tag=whatrocks09-20&creative=9325&linkCode=as2&creativeASIN=B000FC1AAW&linkId=c09b4ec1fbfb88b2cec1eec600c9ae6e", // The Knight
  "5046ea1f-94a4-5e7b-a683-a521e06312d0": "", // A History of the Ancient World: Volume II Rome
  "1b53d018-c1d0-5863-b349-eb2053466444":
    "https://www.amazon.com/gp/product/0140093141/ref=as_li_qf_asin_il_tl?ie=UTF8&tag=whatrocks09-20&creative=9325&linkCode=as2&creativeASIN=0140093141&linkId=e3de99ff6f26ab0ff978fa575f971368", // I, Claudius/Claudius the God
  "97a7bcc3-557c-567a-afbb-e84046107c49":
    "https://www.amazon.com/gp/product/143918271X/ref=as_li_qf_asin_il_tl?ie=UTF8&tag=whatrocks09-20&creative=9325&linkCode=as2&creativeASIN=143918271X&linkId=1b31e2927e9e28221385320d04021837", // A Moveable Feast
  "743e3943-dd20-5ac2-969d-6487a562fe4b":
    "https://www.amazon.com/gp/product/0553418025/ref=as_li_qf_asin_il_tl?ie=UTF8&tag=whatrocks09-20&creative=9325&linkCode=as2&creativeASIN=0553418025&linkId=dabe7e943a36e813f67ab4156ff29d82", // The Martian
  "e2c461ae-a28c-529f-8cc5-bf536bc71cb5":
    "https://www.amazon.com/gp/product/1590178211/ref=as_li_qf_asin_il_tl?ie=UTF8&tag=whatrocks09-20&creative=9325&linkCode=as2&creativeASIN=1590178211&linkId=d2577768514b4ce86b0710ecba2f96a3", // Augustus
  "a4761397-044e-55bb-b958-1779ccbb5c81":
    "https://www.amazon.com/gp/product/1598566660/ref=as_li_qf_asin_il_tl?ie=UTF8&tag=whatrocks09-20&creative=9325&linkCode=as2&creativeASIN=1598566660&linkId=e5b9653ad43f98d40e858cc1527e011a", // The Napoleon of Notting Hill
  "6a2d7b92-4e34-5626-9c50-7016fda23007":
    "https://www.amazon.com/gp/product/0316187410/ref=as_li_qf_asin_il_tl?ie=UTF8&tag=whatrocks09-20&creative=9325&linkCode=as2&creativeASIN=0316187410&linkId=d53a09070a020fe02c3745fc00567d0d", // Gun Machine
  "a01e9801-094c-594c-9a9c-ab31b1ec8fea":
    "https://www.amazon.com/gp/product/0812968255/ref=as_li_qf_asin_il_tl?ie=UTF8&tag=whatrocks09-20&creative=9325&linkCode=as2&creativeASIN=0812968255&linkId=bbae2db472342f378e16e4035e0096f1", // Meditations: With Selected Correspondence
  "f6b053ca-352c-5f20-abb2-8f11e393c887":
    "https://www.amazon.com/gp/product/1400079322/ref=as_li_qf_asin_il_tl?ie=UTF8&tag=whatrocks09-20&creative=9325&linkCode=as2&creativeASIN=1400079322&linkId=28e238ea04d053c0610945f59e2212a0", // Birds Without Wings
  "743e2e94-dec8-5ad1-8084-16fb3e34127c":
    "https://www.amazon.com/gp/product/1590171985/ref=as_li_qf_asin_il_tl?ie=UTF8&tag=whatrocks09-20&creative=9325&linkCode=as2&creativeASIN=1590171985&linkId=8fe7260a8f46a691107fd64e29187da1", // Butcher's Crossing
  "7e41d724-174d-57f8-a67d-245242611479":
    "https://www.amazon.com/gp/product/0321706285/ref=as_li_qf_asin_il_tl?ie=UTF8&tag=whatrocks09-20&creative=9325&linkCode=as2&creativeASIN=0321706285&linkId=d4a96dc0fdeb58781c819590164f266f", // Objective-C Programming: The Big Nerd Ranch Guide
  "ab79828c-194b-5c72-bdcf-b74c87a30851":
    "https://www.amazon.com/gp/product/006147410X/ref=as_li_qf_asin_il_tl?ie=UTF8&tag=whatrocks09-20&creative=9325&linkCode=as2&creativeASIN=006147410X&linkId=03c43f0b01991d93d0dacb07d3542a36", // Anathem
  "1ec9bbdd-4701-537a-873d-87bbd0e8b356":
    "https://www.amazon.com/gp/product/0374502005/ref=as_li_qf_asin_il_tl?ie=UTF8&tag=whatrocks09-20&creative=9325&linkCode=as2&creativeASIN=0374502005&linkId=89a4137227324f97996a18d46cc0de5f", // The Natural
  "9ced17f8-9b22-5bb2-a3a9-77568480ec4d":
    "https://www.amazon.com/gp/product/B003WUYPPG/ref=as_li_qf_asin_il_tl?ie=UTF8&tag=whatrocks09-20&creative=9325&linkCode=as2&creativeASIN=B003WUYPPG&linkId=0c773bdda6a92587a5685732c7096d7d", // Unbroken: A World War II Story of Survival, Resilience and Redemption
  "025afefb-27f3-5dba-ae57-37bb911c5067":
    "https://www.amazon.com/gp/product/1449308929/ref=as_li_qf_asin_il_tl?ie=UTF8&tag=whatrocks09-20&creative=9325&linkCode=as2&creativeASIN=1449308929&linkId=708d098363f7ba06ac43088969d6df69", // APIs: A Strategy Guide
  "4ac4cada-64b4-5be4-a695-bf3b52ab6aaf":
    "https://www.amazon.com/gp/product/0553560719/ref=as_li_qf_asin_il_tl?ie=UTF8&tag=whatrocks09-20&creative=9325&linkCode=as2&creativeASIN=0553560719&linkId=64a0bf19483598930848adec0f12b1b7", // Dark Force Rising
  "4156ea97-0765-52e1-914f-d1e7ae3e3b04":
    "https://www.amazon.com/gp/product/0553296124/ref=as_li_qf_asin_il_tl?ie=UTF8&tag=whatrocks09-20&creative=9325&linkCode=as2&creativeASIN=0553296124&linkId=c3ee0b62aad0f0b66d31b9e6e9bb8733", // Heir to the Empire
  "38f10116-460c-5834-ab08-692120e03e01":
    "https://www.amazon.com/gp/product/0767913736/ref=as_li_qf_asin_il_tl?ie=UTF8&tag=whatrocks09-20&creative=9325&linkCode=as2&creativeASIN=0767913736&linkId=14b29c662769e98d82c2d1af2d051f99", // The River of Doubt: Theodore Roosevelt's Darkest Journey
  "84ac4887-7436-5353-a081-893e31a4599a":
    "https://www.amazon.com/gp/product/0578627310/ref=as_li_qf_asin_il_tl?ie=UTF8&tag=whatrocks09-20&creative=9325&linkCode=as2&creativeASIN=0578627310&linkId=0c5966ac674924d7b7ad466decade1cd", // The Making of Prince of Persia
};
