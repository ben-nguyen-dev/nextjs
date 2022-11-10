import Head from 'next/head'
import { useEffect, useRef } from 'react'

export default function Home() {
    const mainRef: any = useRef(null)

    useEffect(() => {
        console.log(mainRef.current.onScroll)
    }, [mainRef])

    const handleScroll = (e: any) => {
        const bottom = e.target.scrollHeight - e.target.scrollTop === e.target.clientHeight
        console.log(bottom)
        // if (bottom) { ... }
    }

    return (
        <main
            ref={mainRef}
            className=" h-screen snap-x snap-y snap-mandatory overflow-auto overflow-y-visible overscroll-contain"
            onScroll={(e) => handleScroll(e)}
        >
            <section
                id="home"
                className="flex h-screen snap-center items-center justify-center bg-blue-500 text-4xl text-amber-50"
            >
                <h1>1</h1>
            </section>
            <section
                id="home2"
                className="flex h-screen snap-center items-center justify-center bg-red-500 text-4xl text-amber-50"
            >
                <h1>2</h1>
            </section>
            <section className="flex h-screen snap-center items-center justify-center bg-green-500 text-4xl text-amber-50">
                <h1>3</h1>
            </section>
            <section className="flex h-screen snap-center items-center justify-center bg-purple-500 text-4xl text-amber-50">
                <h1>4</h1>
            </section>
            <section className="flex h-screen snap-center items-center justify-center bg-blue-500 text-4xl text-amber-50">
                <h1>5</h1>
            </section>
        </main>
    )
}
