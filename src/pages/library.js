import React, { useState, useEffect } from "react";
import { graphql } from "gatsby";
import Layout from "../layouts";
import s from "./library.module.scss";
import Helmet from "react-helmet";
import Select from "react-select";
import { useQueryParam, StringParam } from "use-query-params";

function filterBooks(books, genre) {
  if (!genre) {
    return books
  }
  return books.filter((book) => book.genre === genre);
}

export default function Library({ data }) {
  // initial data loading
  const ogBooks = data.allGoogleSheet.nodes[0].LIBRARY.slice().reverse();

  const [filteredBooks, setFilteredBooks] = useState(ogBooks);
  const [genres, setGenres] = useState([]);
  const [genre, setGenre] = useQueryParam("genre", StringParam);

  useEffect(() => {
      setFilteredBooks(filterBooks(ogBooks, genre));
  }, [genre]);

  // populate the form
  if (!genres.length) {
    setGenres([...new Set(ogBooks.map((book) => book.genre))]);
  }

  return (
    <Layout>
      <Helmet title="Charlie Harrington's Library" />
      <h1 className={s.pageTitle}>What I've Been Reading</h1>
      <Select
        value={{value: genre, label: genre}}
        placeholder="Filter by genre"
        isClearable={true}
        options={genres.map((genre) => {
          return { value: genre, label: genre };
        })}
        onChange={(val) => {
          setGenre(val ? val.value : null);
          const filtered = filterBooks(ogBooks, val ? val.value: "")
          setFilteredBooks(filtered)
        }}
      />
      <div className={s.cards}>
        {filteredBooks.map((book, i) => {
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
                {book.isFavorite ? (
                  <span className="favBook" role="img" aria-label="start">
                    ⭐
                  </span>
                ) : (
                  <span />
                )}
                <a
                  href={book.amazonLink ? book.amazonLink : book.reviewLink}
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  {book.title}
                </a>
              </div>
              <div>
                <h3>
                  <strong>{book.author}</strong>
                </h3>
              </div>
              <div>
                <strong>Published:</strong> {book.yearPublished}
              </div>
              <div>
                <strong>Age of Book at Reading:</strong> {book.yearsBetween}
              </div>
              <div>
                <strong>Genre:</strong> {book.genre}
              </div>
              {book.topic ? (
                <div>
                  <strong>Topic:</strong> {book.topic}
                </div>
              ) : (
                <span />
              )}
              {book.review ? <hr /> : <span />}
              <div className={s.review}>{book.review}</div>
            </div>
          );
        })}
      </div>
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
          id
          isbn
          parent
          review
          reviewLink
          amazonLink
          title
          yearPublished
          yearsBetween
          isFavorite
          isFiction
          isReread
          genre
          topic
        }
      }
    }
  }
`;
