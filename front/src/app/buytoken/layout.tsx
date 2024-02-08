import ContentLayout from "@/components/ContentLayout/ContentLayout";

export default function BuytokenLayout({
  children, // will be a page or nested layout
}: {
  children: React.ReactNode
}) {
  return (
    <section>
      <ContentLayout>
        {children}
      </ContentLayout>
    </section>
  )
}