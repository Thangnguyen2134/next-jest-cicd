interface PageProps {
  params: {
    slug: string;
  };
}
export const metadata = {
  title: "App Router",
};

export default function Page({ params }: PageProps) {
  return <h1>Blog Slug: {params.slug}</h1>;
}
