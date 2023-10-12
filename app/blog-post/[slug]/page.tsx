interface Props {
   params: {
      slug: string
   }
}

export default async function Page({ params }: Props) {
   return (
      <main>
         <h1>post</h1>
      </main>
   )
}