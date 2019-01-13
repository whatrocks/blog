import React from "react";
import { graphql } from "gatsby";
import Layout from "../layouts";
import s from "./library.module.scss";

export default function Library({ data }) {
  const { edges } = data.allGoodreadsShelf;
  const books = edges[0].node.reviews;
  return (
    <Layout>
      <h2>Library</h2>
      <table>
        <thead>
          <tr>
            <th>Cover</th>
            <th>Title</th>
            <th>Author(s)</th>
            <th>Date Read</th>
            <th>Publisher</th>
            <th>Published</th>
            <th>My review</th>
          </tr>
        </thead>
        <tbody>
          {books.map((book, i) => {
            return (
              <tr key={i}>
                <td>
                  <img className={s.bookCover} src={book.book.image_url} />
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
                <td>{book.book.publication_year}</td>
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
        My thanks to the good ol' Goodreads API for this tasty data o' mine.
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
              publication_year
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
