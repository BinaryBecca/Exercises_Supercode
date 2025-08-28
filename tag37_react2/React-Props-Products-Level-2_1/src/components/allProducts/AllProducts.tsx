import React from "react"
import Products from "../products/Products"

export default function AllProducts() {
  return (
    <>
      <div className="flex flex-row justify-evenly items-center mt-10">
        <Products
          urlImg="https://cdn2.photostockeditor.com/c/0601/bottle-cocooil-baby-oil-on-desk-lotion-lotion-image.jpg"
          title="Oil"
          price={30}
        />

        <Products
          urlImg="https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
          title="Camera"
          price={60}
        />

        <Products
          urlImg="https://static.wixstatic.com/media/25ebdc%5F11569a061f824bc99cda2e6b1ac6348b~mv2.jpg/v1/fill/w%5F740,h%5F493,al%5Fc,q%5F85,usm%5F0.66%5F1.00%5F0.01,enc%5Fauto/25ebdc%5F11569a061f824bc99cda2e6b1ac6348b~mv2.jpg"
          title="Moisture"
          price={20}
        />
      </div>
    </>
  )
}
