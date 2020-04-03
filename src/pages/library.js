import React from "react";
import { graphql } from "gatsby";
import Layout from "../layouts";
import s from "./library.module.scss";

export default function Library({ data }) {
  const { edges } = data.allGoodreadsShelf;
  const books = edges[0].node.reviews;
  return (
    <Layout>
      <h1 className={s.pageTitle}>What I've Been Reading</h1>
      <div className={s.cards}>
        {books.map((book, i) => {
          return (
            <div className={s.card} key={i}>
              <div className={s.date}>
                {new Date(book.date_added).toLocaleDateString("en-US", {
                  day: "numeric",
                  month: "long",
                  year: "numeric"
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
                      amazonLinkMap[book.book.id] === ""
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
                    year: "numeric"
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
  "0358646e-f3e9-53b6-a3d2-7f0ed3eaadfe": "", // The Outer Lands: A Natural History Guide to Cape Cod, Martha's Vineyard, Nantucket, Block Island, and Long Island
  "20f47503-e81c-59e8-aca0-0d8fcfd287e1":
    "https://www.amazon.com/gp/product/1984823795/ref=as_li_qf_asin_il_tl?ie=UTF8&tag=whatrocks09-20&creative=9325&linkCode=as2&creativeASIN=1984823795&linkId=2f0acff66834c92cc604c7380dc88056", // The Warehouse
  "743df7de-4ed8-5b34-a42b-2758f83ad260": "", // Wake of Vultures
  "55e254f8-2547-5f9b-8435-6d9cf9d4763e": "", // Under Wildwood
  "b4f9680d-77a6-5993-80ac-8291ffafc850": "", // Greenwitch
  "b95672e7-7040-56de-91ee-20b3843a8af5": "", // A Mind at Play: How Claude Shannon Invented the Information Age
  "3cc2e023-06e5-5d88-abb1-4f41b3daa249": "", // A Gentleman in Moscow
  "85faec2e-dbea-571b-9d11-da92d02b074c": "", // Recursion
  "728d92e1-b256-5370-be6a-449b6639d1c1": "", // Born to Run
  "78e21875-17df-5f17-a7e8-67416ea84258": "", // If on a Winter's Night a Traveler
  "b69e2da2-4ddb-511d-b758-f346dd54707c": "", // ZACH-LIKE, A Game Design History
  "4526eb33-1757-5acd-8ad8-2fdb87153698": "", // The Left Hand of Darkness
  "bbaa49dd-5430-5a75-a28d-9af282197f25": "", // Commodore 64 User's Guide
  "c7a660cc-e2ef-521c-8ca8-36943892a513": "", // Bird by Bird: Some Instructions on Writing and Life
  "17750cbf-96fb-55df-86b6-308c12343c32": "", // Shards of Honour
  "a0a57771-2a7d-56d0-a460-6b3bf9daf03f": "", // The Magician's Land
  "cbfc89e3-096d-5890-809b-12d89980bd06": "", // The Magician King
  "7509d80a-18f8-550c-ba64-24a566533c57": "", // The Magicians
  "73deccc2-4cae-59e2-b907-642c0f967802": "", // Code
  "751d3a33-f51e-5009-a6cd-5c1bdc2b07ae": "", // Getting Started with Arduino
  "b8bd57d7-790b-5c19-a6fb-1cfdcfb0f57e": "", // Island of the Blue Dolphins
  "e5834734-df6d-57b3-a7b6-64114174e345": "", // The Greatest Salesman in the World
  "ef5a3fae-c08a-5bdc-a09f-c1728f3902c0": "", // Falling Free
  "136a67b0-4e5a-5922-9ad0-bff760abf2ee": "", // Return to the Little Kingdom: Steve Jobs, the Creation of Apple, and How It Changed the World
  "2e354cb1-b1c6-540a-89c7-0a6c8bf53a5f": "", // Red Rising
  "6e236e3e-b4ec-56cb-a612-99e487cb8811": "", // Abhorsen
  "6e020f7e-1828-55a9-918b-fabfa781e1bd": "", // Lirael
  "80dfa86b-c8db-5590-8250-05e47341978a": "", // Mr. Penumbra's 24-Hour Bookstore
  "581daf38-e752-52f3-91ea-e532c92a8c19": "", // The Lightning Thief
  "6caa2879-93f9-5e3d-be84-963c5cf29e12": "", // The Ocean at the End of the Lane
  "c542f7e1-cf8e-5380-aeac-a08be363359b": "", // The Dark Is Rising
  "21300495-36fa-5d8d-a6ad-9aeb2928eda1": "", // The Soul of a New Machine
  "6e04147b-2d9d-5c31-a221-d360bde66639": "", // From the Mixed-Up Files of Mrs Basil E. Frankweiler
  "721035cc-79b2-5a8c-9c4e-e43e102c9430": "", // The Way of Kings
  "cec78f8a-fd59-5afc-9451-c956c02ac404": "", // Old Man's War
  "cb7ae46b-b6aa-56e7-8758-d71dbb99ef37": "", // Wildwood
  "9defd108-8db8-5e10-870d-62b4afce5c8f": "", // Masters of Doom: How Two Guys Created an Empire and Transformed Pop Culture
  "b47bd22d-8d96-5c9b-92c3-07114fffdd2b": "", // The Lifters
  "2151b519-2588-5b93-9bfa-27c030cc4783": "", // The Borrowers
  "aa7d5453-ef01-5faf-96c3-050ca9f0e152": "", // Seven Surrenders
  "01124be8-9ebd-5552-9fb5-08c2ba2b30a2": "", // The Idea Factory: Learning to Think at MIT
  "29fc69ec-062c-59c3-aadc-cf836fabe515": "", // Children of Blood and Bone
  "33dd1b73-3b99-5a90-8d2e-fd12115167a3": "", // Coraline
  "b6376517-6c2b-5bc1-9e39-b3f13f86e204": "", // The Electric State
  "090788be-ce5d-5841-b9e8-76f400f461ee": "", // Death's End
  "280c932b-8166-58c4-91bb-6bcdbd8418ed": "", // The Dark Forest
  "0107084b-7901-527d-b034-16c7137fb3ca": "", // Wonder
  "0ddea489-8244-591c-b943-e3bc09e6b72f": "", // Watchmen
  "539f5751-d093-575c-a162-4baa9b79f105": "", // The Library at Mount Char
  "a4e7eace-12a8-57c8-b47e-bae71aa73f6d": "", // The Secret Garden
  "087aa06a-0a16-5a90-90d1-3e741a5328cc": "", // The Body in the Library
  "8e8b4fbd-3c54-56c5-bec7-276f0edc114f": "", // The Halloween Tree
  "c4ddc804-89f9-55d8-8246-43f2af91d23e": "", // The Idea Factory: Bell Labs and the Great Age of American Innovation
  "3b143feb-f17c-5eb6-a9a7-5b8ac5ec9927": "", // Hatchet
  "bec13b80-a97a-5951-854e-4c054684cca2": "", // The House on the Cliff
  "97196efa-3270-5460-8245-c17a7a279c3e": "", // The Secret of Skull Mountain
  "71f70f4d-5b73-52f9-b3dc-c5ece081c38f": "", // Too Like the Lightning
  "6074ecac-14af-54fb-8be1-a430dafd75e5": "", // Red Mars
  "db53c158-abb1-5955-af19-54c4acb13275": "", // Redwall
  "63986808-1483-542e-a811-0e3870e54b16": "", // Where Wizards Stay Up Late: The Origins of the Internet
  "96a71ce0-cff9-5575-a2b3-9cee1fa23a42": "", // Dark Matter
  "80a747a4-380b-5415-9681-f0562b337e21": "", // The Bonehunters
  "c98642f6-b90e-598b-8391-0b69c94d63fa": "", // Midnight Tides
  "c9938b55-37f4-5d9c-844e-b6074163ce43": "", // Ready Player One
  "958be9b1-4dc5-57da-aa35-767daf2e0c04": "", // Arlo Finch in the Valley of Fire
  "9ed55d66-52ff-55e6-a44a-9027a8faaf98": "", // Shantaram
  "96d07cc6-ab86-5734-8d2e-6058c91b4ea0": "", // The House with a Clock in Its Walls
  "ee5bb047-99cc-51a4-a6ec-0ee71916f87d": "", // Holes
  "323c80f8-3460-5a27-ab98-81893bfd317f": "", // The Face in the Frost
  "2fc30d4b-e198-5d95-b7e5-62dc0e3bee58": "", // Sabriel
  "3f76222a-44fe-53da-8f43-75f6f0614ddb": "", // The Wise Man's Fear
  "f7992667-7071-5805-9eb4-efc2ce842770": "", // The Name of the Wind
  "4409e65f-4d2b-53a6-aa30-a94eabd38e66": "", // Excession
  "5b3f2e42-8742-59bb-ba12-c31ae61e491e": "", // The Last Stand: Custer, Sitting Bull, and the Battle of the Little Bighorn
  "79e9ea7a-468a-5126-847a-b6bd47bf4031": "", // Season of the Witch: Enchantment, Terror and Deliverance in the City of Love
  "46926969-0766-5843-9c3f-47a67abe0f67": "", // Shardik
  "e91cc296-d39d-5b79-bbef-4849cd79e7c3": "", // House of Chains
  "53ba987a-0aef-533a-bbae-957b9555a75d": "", // The Finest Hours: The True Story of the U.S. Coast Guard's Most Daring Sea Rescue
  "4e50e379-9590-5258-a6fd-5206d599cd5d": "", // The Tortilla Curtain
  "79634f22-ae09-50d0-af77-584f868a3e4b": "", // Memories of Ice
  "fe5aa38a-5f8a-51ae-bccd-7bb029c2ab65": "", // Leviathan Wakes
  "d857933f-2d2b-5578-b955-a9c119c6199f": "", // The Sparrow
  "f71d00a7-8e3c-5270-8935-775cdf28bc4a": "", // Deadhouse Gates
  "34fa0c07-67b9-50cc-89e8-1cc31927c976": "", // Corelli's Mandolin
  "1f23a528-41d4-5e50-9508-4173c2230396": "", // Ancillary Mercy
  "fbd8958a-04ec-57bf-9172-af1cbbe5e946": "", // The Fall of Hyperion
  "bc1c97f5-ad1c-58c5-9bde-455508dcbf72": "", // Hyperion
  "87d98b3a-4090-5aa5-8af5-d68da5a370e1": "", // A Perfect Spy
  "abd84ba0-9e35-5b11-bcd6-9719b4e130dd": "", // Shoeless Joe
  "73137d63-4fc4-59cb-9113-8b475ce1168a": "", // Comanche Moon
  "97171bdf-0d9a-51d0-b36e-783760ec8c57": "", // Be Iron Fit, 2nd: Time-Efficient Training Secrets for Ultimate Fitness
  "a3162fff-b52b-59d2-a5cb-f16e63877c69": "", // Beautiful Swimmers: Watermen, Crabs and the Chesapeake Bay
  "70403809-28f7-57f6-a5c5-558b6fd5dcc0": "", // The Martian Chronicles
  "7fbbe76b-83b2-54ff-94df-802caab81be1": "", // The Brothers Karamazov
  "2c3eab57-058f-5e16-8fba-883dd2fc5d51": "", // The Wind-Up Bird Chronicle
  "3465eee0-cfab-5550-bd36-b7dc11bfc26d": "", // Ancillary Sword
  "33b6438f-7d51-58ed-8a2b-48ec69a6f9a1": "", // Ancillary Justice
  "170b9cc2-183b-52de-ba38-defe3b446b4c": "", // Julian
  "bfb3c1f3-ffe1-539c-8c2f-44b7a3a988fc": "", // Seveneves
  "733a4286-85e7-5c4f-858b-48241d6f3de1": "", // Setting the Table: The Transforming Power of Hospitality in Business
  "05114f2e-ab83-57e9-892b-98369e736ee2": "", // The Three Musketeers
  "97ebe08e-3263-5f09-9906-c1f39f5b7a2d": "", // Objective-C Programming: The Big Nerd Ranch Guide
  "7e5d9507-d246-5dd0-9547-b9da120fde58": "", // Flowers for Algernon
  "6401792f-4f0d-5275-ad12-3d0c87208beb": "", // Harry Potter and the Methods of Rationality
  "491ff3cd-e22f-5aa4-bdca-87000b7cb603": "", // The Mists of Avalon
  "8d6a0387-df35-5e5b-9179-360c79a1a496": "", // Travels with Charley
  "0f73b999-a830-5452-83eb-e7cc80aac268": "", // A General Theory of Authority
  "1316a7b7-b92a-5dd3-8625-bce271d4f600": "", // Antony and Cleopatra
  "29dba6ac-192d-5d29-bd51-1e3779d24871": "", // The Snowball: Warren Buffett and the Business of Life
  "cb8bea27-1a51-5ad9-861e-b1a8725c2005": "", // Little, Big
  "d40b9ec6-c3cc-5dfa-aae9-72540cb7cc51": "", // Anything You Want
  "8ad5dd27-bed4-503b-a484-370266ecd689": "", // The Three-Body Problem
  "43d72363-9ce6-53fc-b352-3f69c275d114": "", // Memoirs of Hadrian
  "77e95540-85d5-568a-b2ff-ee148bca3640": "", // A Fire Upon the Deep
  "e132cdcc-bd7a-5b98-9871-7deeb903e8e1": "", // Rainbows End
  "35f4addf-6fed-5fe4-8439-d77dd6028491": "", // Cryptonomicon
  "ae9d0f4f-3823-5221-92b3-ecdd81fa8852": "", // Surely You're Joking, Mr. Feynman!: Adventures of a Curious Character
  "03d57a71-e169-5930-a5dc-ecaa1570449a": "", // This Boy's Life
  "d89376b2-8a7e-569a-a03f-f4cd4bacb462": "", // The Once and Future King
  "2f0b8a41-aa27-550f-9f3f-58507526a701": "", // The Handmaid's Tale
  "35cfceae-cb95-5053-bee2-1e181fd5da06": "", // Zero to One: Notes on Startups, or How to Build the Future
  "e060aceb-e91e-5f41-b767-7504be190440": "", // A Deepness in the Sky
  "51fcdea3-221b-522e-b39d-9305d5eac41b": "", // A Canticle for Leibowitz
  "09f425af-99ba-593d-b004-2c4ede26e9d8": "", // The Master and Margarita
  "61fd5cb8-cc45-560d-9d59-d20f614589b5": "", // Infinite Jest
  "c8afccf0-66b7-5ca0-8a34-d6ccd17b415f": "", // Batman: Year One
  "e7b2d169-7276-51fb-a5f1-b71a38230426": "", // Selected Works
  "6f3c34ca-c6d3-5db3-83bc-7482ff46aba6": "", // The Shadow of the Wind
  "559b400e-c7bb-5dd2-82cd-b8955766d1c7": "", // London Journal, 1762-1763
  "055d2f52-b9d0-5f0f-bbae-d76b3ac4ceea": "", // Thrilling Cities
  "10a24726-a981-5b9d-ba82-930903a4a020": "", // Truman
  "042dd0c1-503e-5e54-8d3e-525afa65a8c3": "", // Another Sort of Learning
  "91d3b209-06f2-527d-b7fd-6250257517ee": "", // The Magus
  "21ba9212-119a-5b1b-af8d-c3b1ee85b01a": "", // Steve Jobs
  "9e23dee7-1999-5607-808f-4d464d930a65": "", // The Knight
  "5046ea1f-94a4-5e7b-a683-a521e06312d0": "", // A History of the Ancient World: Volume II Rome
  "1b53d018-c1d0-5863-b349-eb2053466444": "", // I, Claudius/Claudius the God
  "97a7bcc3-557c-567a-afbb-e84046107c49": "", // A Moveable Feast
  "743e3943-dd20-5ac2-969d-6487a562fe4b": "", // The Martian
  "e2c461ae-a28c-529f-8cc5-bf536bc71cb5": "", // Augustus
  "a4761397-044e-55bb-b958-1779ccbb5c81": "", // The Napoleon of Notting Hill
  "6a2d7b92-4e34-5626-9c50-7016fda23007": "", // Gun Machine
  "a01e9801-094c-594c-9a9c-ab31b1ec8fea": "", // Meditations: With Selected Correspondence
  "f6b053ca-352c-5f20-abb2-8f11e393c887": "", // Birds Without Wings
  "743e2e94-dec8-5ad1-8084-16fb3e34127c": "", // Butcher's Crossing
  "7e41d724-174d-57f8-a67d-245242611479": "", // Objective-C Programming: The Big Nerd Ranch Guide
  "ab79828c-194b-5c72-bdcf-b74c87a30851": "", // Anathem
  "1ec9bbdd-4701-537a-873d-87bbd0e8b356": "", // The Natural
  "9ced17f8-9b22-5bb2-a3a9-77568480ec4d": "", // Unbroken: A World War II Story of Survival, Resilience and Redemption
  "025afefb-27f3-5dba-ae57-37bb911c5067": "", // APIs: A Strategy Guide
  "4ac4cada-64b4-5be4-a695-bf3b52ab6aaf": "", // Dark Force Rising
  "4156ea97-0765-52e1-914f-d1e7ae3e3b04": "", // Heir to the Empire
  "38f10116-460c-5834-ab08-692120e03e01": "", // The River of Doubt: Theodore Roosevelt's Darkest Journey
  "84ac4887-7436-5353-a081-893e31a4599a": "" // The Making of Prince of Persia
};
