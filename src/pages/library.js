import React from "react";
import { graphql } from "gatsby";
import Layout from "../layouts";
import s from "./library.module.scss";
import Helmet from "react-helmet";

export default function Library({ data }) {
  const books  = data.allGoogleSheet.nodes[0].LIBRARY;
  return (
    <Layout>
      <Helmet title="Charlie Harrington's Library" />
      <h1 className={s.pageTitle}>What I've Been Reading</h1>
      <div className={s.cards}>
        {books.map((book, i) => {
          return (
            <div className={s.card} key={i}>
              <div className={s.date}>
                {new Date(book.dateRead).toLocaleDateString("en-US", {
                  day: "numeric",
                  month: "long",
                  year: "numeric",
                })}
              </div>
              <img
                alt={book.title}
                className={s.bookCover}
                src={book.coverUrl}
                height="250"
                width="165"
              />
              <div className={s.title}>
                <a href={book.reviewLink} rel="noopener noreferrer" target="_blank">
                  {book.title}
                </a>
              </div>
              <div>
                {book.author}
              </div>
              <div>{book.review}</div>
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
                    alt={book.title}
                    className={s.bookCover}
                    src={book.coverUrl}
                    height="250"
                    width="165"
                  />
                </td>
                <td className={s.title}>
                  <a
                    href={book.reviewLink}
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    {book.title}
                  </a>
                </td>
                <td>
                  {book.author}
                </td>
                <td>
                  {new Date(book.dateRead).toLocaleDateString("en-US", {
                    day: "numeric",
                    month: "long",
                    year: "numeric",
                  })}
                </td>
                <td>{book.review}</td>
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
        This list of books I love (because I basically love every book I read)
        uses affiliate links to Amazon. If you purchase an item through one of
        these links here or elsewhere on my site, I receive a small kickback
        (often around 4-5%). Here's the full deal: Charlie Harrington is a
        participant in the Amazon Services LLC Associates Program, an affiliate
        advertising program designed to provide a means for sites to earn
        advertising fees by advertising and linking to Amazon.com.
      </p>
    </Layout>
  );
}

export const pageQuery = graphql`
  query LibraryData {
    allGoogleSheet {
      nodes {
        LIBRARY {
          author
          coverUrl
          dateRead
          dateReadStr
          id
          isbn
          parent
          review
          reviewLink
          title
          yearPublished
        }
      }
    }
  }
`;
