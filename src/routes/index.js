const express = require("express");
const Book = require("../models/book");

const router = express.Router();

// 도서 등록
router.post("/books", async (req, res) => {
  try {
    const { title, author } = req.body;
    const book = await Book.create({ title, author });
    res.status(201).json(book);
  } catch (error) {
    res
      .status(400)
      .json({ message: "도서 등록에 실패했습니다.", error: error.message });
  }
});

// 도서 대여 신청
router.post("/books/:bookId/borrow", async (req, res) => {
  try {
    const book = await Book.findByPk(req.params.bookId);
    if (!book) {
      return res.status(404).json({ message: "도서를 찾을 수 없습니다." });
    }

    if (book.status === "BORROWED") {
      return res.status(400).json({ message: "이미 대여중인 도서입니다." });
    }

    book.status = "BORROWED";
    await book.save();

    res.json({ message: "도서 대여가 완료되었습니다.", book });
  } catch (error) {
    res
      .status(400)
      .json({ message: "도서 대여에 실패했습니다.", error: error.message });
  }
});

// 특정 도서 조회
router.get("/books/:bookId", async (req, res) => {
  try {
    const book = await Book.findByPk(req.params.bookId);
    if (!book) {
      return res.status(404).json({ message: "도서를 찾을 수 없습니다." });
    }
    res.json(book);
  } catch (error) {
    res
      .status(400)
      .json({ message: "도서 조회에 실패했습니다.", error: error.message });
  }
});

router.get("/books", async (_req, res) => {
  try {
    const books = await Book.findAll();
    res.json(books);
  } catch (error) {
    res.status(400).json({
      message: "도서 목록 조회에 실패했습니다.",
      error: error.message,
    });
  }
});

module.exports = router;
