import Image from 'next/image';
import Icon from './images/noun-expense-5802925.svg'
import Icon1 from './images/noun-expense-5075568.svg'
export default async function Home() {
    return (
        <main className=" text-center mt-10 flex flex-col items-center">
            
            <aside className='flex'>
                <Image src={Icon} alt='icon' width={100} height={100} className='mr-1' />
                <h2 className=' text-4xl font-semibold mt-6 w-52 '>CashMosaic</h2>
                <Image src={Icon1} alt='icon' width={100} height={100} className='ml-2' />
            </aside>
            
            <h4 className='text-2xl mx-20 my-7 '>Managing your finances should be as easy as sorting a deck of cards, not as confusing as deciphering a jigsaw puzzle</h4>
            <h3 className='text-3xl my-5'>Explore CashMosaic's Key Features:</h3>
            <section className='flex mt-8 text-xl flex-wrap  justify-center'>
                <aside className='w-48 sm:mr-10 mx-10 mb-10 sm:border-y-0 sm:border-r-2  border-y-2 border-black rounded-lg p-2'>
                    <h2 className='font-semibold'>History</h2>
                    <p>View expenses and income chronologically. Add new entries easily.</p>
                </aside>

                <aside className='w-48 sm:mr-10 mx-10 mb-10 sm:border-y-0 sm:border-r-2  border-y-2 border-black rounded-lg p-2' >
                    <h2 className='font-semibold'>Balance</h2>
                    <p>Track your balance, starting from the largest to the smallest expenses and income.</p>
                </aside>

                <aside className='w-48 sm:mr-10 mx-10 mb-10 sm:border-y-0 sm:border-r-2  border-y-2 border-black rounded-lg p-2' >
                    <h2 className='font-semibold'>Charts</h2>
                    <p>Visualize expenses and incomes with various charts for insights.</p>
                </aside>
            </section>

    </main>
    )
}
