import Image from "next/image";
import ClientOnly from "./components/ClientOnly";
import Container from "./components/Container";
import EmptyState from "./components/EmptyState";
import getListing from "./actions/getListing";

export default async function Home() {
  const listings = await getListing();
  console.log(listings);
  const isEmpty = true;
  if (isEmpty) {
    return (
      <ClientOnly>
        <EmptyState showReset />
      </ClientOnly>
    );
  }
  return (
    <ClientOnly>
      <Container>
        <div className="pt-24 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-8">
          <div>My Future Listing</div>
        </div>
      </Container>
    </ClientOnly>
  );
}
