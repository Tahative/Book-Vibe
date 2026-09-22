import Image from 'next/image';
import bannerImg from '@/assets/hero_img.jpg';

const Banner = () => {
    return (
        <section className='py-16 md:py-24'>
            <div className='container mx-auto px-4'>
                <div className='relative grid grid-cols-1 md:grid-cols-2 gap-10 items-center overflow-hidden rounded-3xl bg-gradient-to-br from-slate-100 to-slate-200 p-8 md:p-14 shadow-sm'>

                    {/* Decorative accent blob */}
                    <div className='pointer-events-none absolute -top-24 -right-24 h-72 w-72 rounded-full bg-accent/10 blur-3xl' />

                    <div className='relative z-10 space-y-6'>
                        <span className='inline-block rounded-full bg-white/70 px-4 py-1 text-sm font-medium text-slate-600 shadow-sm'>
                            📚 New Arrivals
                        </span>

                        <h2 className='font-bold text-4xl md:text-5xl lg:text-6xl leading-tight text-slate-900'>
                            Books to freshen up
                            <br className='hidden md:block' /> your bookshelf
                        </h2>

                        <p className='text-slate-600 text-base md:text-lg max-w-md'>
                            Curated picks across every genre — find your next favorite read in minutes.
                        </p>

                        <button className='btn btn-accent rounded-full px-8 shadow-md hover:shadow-lg transition-shadow'>
                            View The List
                        </button>
                    </div>

                    <div className='relative z-10 flex justify-center md:justify-end'>
                        <div className='relative w-full max-w-sm rounded-2xl overflow-hidden shadow-xl ring-1 ring-black/5'>
                            <Image
                                src={bannerImg}
                                alt='Featured books on a shelf'
                                className='object-cover w-full h-full'
                                priority
                            />
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default Banner;