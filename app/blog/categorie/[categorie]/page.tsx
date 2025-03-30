import BlogCategorie from '@/components/BlogCategorie'
import CategorySection from '@/components/CategorySection'
import Footer from '@/components/Footer'
import NavBar from '@/components/NavBar'
import React from 'react'


function page({params}:{params:{categorie:string}}) {
    
    return (
        <div>
            {/* <p>Catégorie : {params.categorie}</p> */}
            <NavBar/>
            <BlogCategorie categorie={params.categorie} />
            <CategorySection />
            <Footer/>
        </div>
    )
}

export default page