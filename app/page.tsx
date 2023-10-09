import Image from 'next/image';
import Icon from './images/noun-expense-5802925.svg'
import Icon1 from './images/noun-expense-5075568.svg'
export default async function Home() {
    return (
        <main className=" text-center mt-20 flex justify-center">
            <Image src={Icon} alt='icon' width={100} height={100} className='mr-1' />
            <h2 className=' text-3xl font-semibold mt-6 '>Personal Budget Planner</h2>
            <Image src={Icon1} alt='icon' width={100} height={100} className='ml-2' />
        </main>
    )
}
