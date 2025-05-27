import Header from "@/components/Header";
import ImageComponent from "@/components/ImageComponent";

export default function Home() {
  return (
    <div className="w-[1440px] mx-auto">
      <Header />
      <main className="flex items-center justify-between mt-18 gap-36 w-[93%] mx-auto">
        <div className="">
          <ImageComponent
            src={"/images/image-product-1.jpg"}
            alt={"Product image"}
            width={500}
            height={500}
            radius="rounded-[1.25rem]"
          />
        </div>
        <div className="flex-1">
          <p className="text-sm text-[var(--dark-grayish-blue)] font-bold uppercase tracking-[0.15rem]">
            Sneaker Company
          </p>
          <h1 className="mt-4 mb-12 text-6xl text-[var(--very-dark-blue)] font-bold">
            Fall Limited Edition Sneakers
          </h1>
          <p className="max-w-[500px] text-[18px] text-justify text-[var(--dark-grayish-blue)]">
            These low-profile sneakers are your perfect casual wear companion.
            Featuring a durable rubber outer sole, they’ll withstand everything
            the weather can offer.
          </p>
          <div className="my-4">
            <div className="flex items-center gap-6">
              <p className="text-[var(--very-dark-blue)] text-[2rem] font-bold">
                $125.00
              </p>
              <p className="bg-[var(--black-75)] text-[var(--neutral-white)] text-sm font-bold py-1 px-3 rounded-sm">
                50%
              </p>
            </div>
            <small className="text-base font-bold text-[var(--dark-grayish-blue)] line-through">
              $250.00
            </small>
          </div>
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-12 bg-[var(--grayish-blue)] py-4 px-6">
              <button className="text-[var(--dark-grayish-blue)] text-2xl font-bold cursor-pointer">
                -
              </button>
              <p className="text-[var(--dark-grayish-blue)] text-2xl font-bold">
                0
              </p>
              <button className="text-[var(--dark-grayish-blue)] text-2xl font-bold cursor-pointer">
                +
              </button>
            </div>
            <div className="flex items-center justify-center bg-[var(--primary-orange)] gap-4 py-4 px-28 cursor-pointer">
              <ImageComponent
                src={"/images/icon-cart.svg"}
                alt={"Cart icon"}
                width={25}
                height={25}
              />
              <button className="text-[var(--very-dark-blue)] text-lg font-bold w-full cursor-pointer">
                Add to cart
              </button>
            </div>
          </div>
        </div>
      </main>
      <div className="flex items-center gap-6 w-[93%] mx-auto mt-6">
        <ImageComponent
          src={"/images/image-product-2.jpg"}
          alt={"Product image"}
          width={108}
          height={108}
          radius="rounded-[1.10rem]"
        />
        <ImageComponent
          src={"/images/image-product-2.jpg"}
          alt={"Product image"}
          width={108}
          height={108}
          radius="rounded-[1.10rem]"
        />
        <ImageComponent
          src={"/images/image-product-2.jpg"}
          alt={"Product image"}
          width={108}
          height={108}
          radius="rounded-[1.10rem]"
        />
        <ImageComponent
          src={"/images/image-product-2.jpg"}
          alt={"Product image"}
          width={108}
          height={108}
          radius="rounded-[1.10rem]"
        />
      </div>
    </div>
  );
}
