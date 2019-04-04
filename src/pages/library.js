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
                  <a href={book.link} rel="noopener noreferrer" target="_blank">
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
        My thanks to the good ol' Goodreads API for this tasty data.
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
