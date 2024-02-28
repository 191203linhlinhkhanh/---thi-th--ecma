import { useEffect, useState } from "../ultilities";
import { isEmpty } from "lodash";

const UpdateBook = function (id) {
  //Tạo state để lưu dữ liệu
  const [book, setBook] = useState({});
  //Thực hiện xử lý bất đồng bộ
  useEffect(function () {
    fetch("http://localhost:3000/books/" + id)
      .then((res) => res.json())
      .then((data) => setBook(data));
  }, []);

  useEffect(function () {
    const updateBtn = document.querySelector("#update-btn");
    // console.log(updateBtn)
    updateBtn.onclick = function (e) {
      e.preventDefault();
      handleUpdateBook();
    };
  });

  if (isEmpty(book)) {
    return /*html*/ `
        <div
        class="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-current border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]"
        role="status">
            <span
            class="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">
            Loading...</span>
        </div>
        `;
  }

  const handleUpdateBook = function () {
    const formData = new FormData(document.querySelector("#update-form"));
    // console.log(formData.get("name"));
    const data = {
      name: formData.get("name"),
      list_price: formData.get("price"),
      short_description: formData.get("desc"),
      image: formData.get("image"),
    };
    fetch("http://localhost:3000/books/" + id, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
  };

  return /*html*/ `
        <section class="relative flex flex-wrap lg:h-screen lg:items-center">
            <div class="w-full px-4 py-12 sm:px-6 sm:py-16 lg:w-1/2 lg:px-8 lg:py-24">
                <div class="mx-auto max-w-lg text-center">
                <h1 class="text-2xl font-bold sm:text-3xl">Chi tiết sách ${book.name}</h1>

                <form id="update-form" action="" class="mx-auto mb-0 mt-8 max-w-md space-y-4">
                <div>
                    <label for="email" class="sr-only">Name</label>
                    <div class="relative">
                        <input
                            type="text"
                            class="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
                            placeholder="Enter email"
                            value="${book.name}"
                            name="name"
                        />
                    </div>
                </div>
                <div>
                    <label for="price" class="sr-only">Price</label>
                    <div class="relative">
                    <input
                        type="text"
                        class="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
                        placeholder="Enter price"
                        value="${book.list_price}"
                        name="price"
                    />
                    </div>
                </div>
                <div>
                    <label for="price" class="sr-only">Price</label>
                    <div class="relative">
                    <input
                        type="text"
                        class="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
                        placeholder="Enter price"
                        value="${book.short_description}"
                        name="desc"
                    />
                    </div>
                </div>
                <div>
                    <label for="price" class="sr-only">Price</label>
                    <div class="relative">
                    <input
                        type="text"
                        class="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
                        placeholder="Enter price"
                        value="${book.image}"
                        name="image"
                    />
                    <img src="${book.image}" width="150px"/>
                    </div>
                </div>

                <div class="flex items-center justify-between">
                    <button
                    id="update-btn"
                    type="submit"
                    class="inline-block rounded-lg bg-blue-500 px-5 py-3 text-sm font-medium text-white"
                    >
                    Cập nhật
                    </button>
                </div>
                </form>
            </div>
        </section>
    
    `;
};

export default UpdateBook;
