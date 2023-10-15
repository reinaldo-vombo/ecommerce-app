import { SiglePost } from "@/components/layout/sigle-post"

interface Props {
   params: {
      slug: string
   }
}

export default async function Page({ params }: Props) {
   return (
      <SiglePost />
   )
}