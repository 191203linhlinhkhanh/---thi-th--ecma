import { useState, useEffect } from "../ultilities";

const AddBook = function () {
  useEffect(function () {
    const addBtn = document.querySelector("#add-btn");
    // console.log(updateBtn)
    addBtn.onclick = function (e) {
      e.preventDefault();
      handleAddBook();
    };
  }, []);

  const handleAddBook = function () {
    const formData = new FormData(document.querySelector("#add-book-form"));
    // console.log(formData.get("name"));
    const data = {
      name: formData.get("name"),
      list_price: formData.get("price"),
      short_description: formData.get("desc"),
      image: formData.get("image"),
    };
    fetch("http://localhost:3000/books/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    alert("Thêm ok!")
    window.location.href="/admin"
  };

  return /*html*/ `
    <section class="relative flex flex-wrap lg:h-screen lg:items-center">
        <div class="w-full px-4 py-12 sm:px-6 sm:py-16 lg:w-1/2 lg:px-8 lg:py-24">
            <div class="mx-auto max-w-lg text-center">
                <h1 class="text-2xl font-bold sm:text-3xl">Thêm Sản Phẩm Mới</h1>
                <form id="add-book-form" action="" class="mx-auto mb-0 mt-8 max-w-md space-y-4">
                    <div>
                        <label for="name" class="sr-only">Tên sản phẩm</label>
                        <div class="relative">
                            <input
                                type="text"
                                class="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
                                placeholder="Tên sản phẩm"
                                name="name"
                            />
                        </div>
                    </div>
                    <div>
                        <label for="price" class="sr-only">Giá sản phẩm</label>
                        <div class="relative">
                            <input
                                type="text"
                                class="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
                                placeholder="Giá sản phẩm"
                                name="price"
                            />
                        </div>
                    </div>
                    <div>
                        <label for="desc" class="sr-only">Mô tả</label>
                        <div class="relative">
                            <input
                                type="text"
                                class="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
                                placeholder="Mô tả"
                                name="desc"
                            />
                        </div>
                    </div>
                    <div>
                        <label for="image" class="sr-only">Link ảnh</label>
                        <div class="relative">
                            <input
                                type="text"
                                class="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
                                placeholder="Link ảnh"
                                name="image"
                            />
                        </div>
                    </div>
                    <div class="flex items-center justify-between">
                        <button
                            id="add-btn"
                            type="submit"
                            class="inline-block rounded-lg bg-blue-500 px-5 py-3 text-sm font-medium text-white"
                            onclick="handleAddBook(event)"
                        >
                            Thêm sản phẩm
                        </button>
                    </div>
                </form>
            </div>
        </div>
    </section>
  `;
};

export default AddBook;
