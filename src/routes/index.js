const express = require("express");

const router = express.Router();

router.get("/", (__req) => {
  
})

// 도서 등록
router.post("/books", (__req, res) => {
    // TODO: 도서 등록 로직 구현
    res.status(201).json({ message: "도서가 등록되었습니다." });
});

// 도서 대여 신청
router.post("/books/:bookId/borrow", (_req, res) => {
    // TODO: 도서 대여 로직 구현
    res.json({ message: "도서 대여가 신청되었습니다." });
});

// 특정 도서 조회
router.get("/books/:bookId", (_req, res) => {
    // TODO: 특정 도서 조회 로직 구현
    res.json({ message: "도서 정보입니다." });
});

// 도서 목록 조회
router.get("/books", (_req, res) => {
    // TODO: 도서 목록 조회 로직 구현
    res.json({ message: "도서 목록입니다." });
});

module.exports = router;
