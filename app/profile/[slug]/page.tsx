interface Props {
   params: {
      slug: string
   }
}

export default async function Page({ params }: Props) {
   return (
      <main>
         <h1>profile</h1>
      </main>
   )
}