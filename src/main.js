// Library - Thư viện
import { render, router } from "./ultilities";
// Components
import "../style.css";

import Admin from "./pages/Admin";
import AddBook from "./pages/AddBook";
import UpdateBook from "./pages/UpdateBook";

router.on("/admin", function () {
  render("#app", Admin);
});

router.on("/admin/add-book", function () {
  render("#app", AddBook);
});

router.on("/admin/book/:id", function ({ data }) {
  render("#app", () => UpdateBook(data.id));
});

router.resolve();
//
