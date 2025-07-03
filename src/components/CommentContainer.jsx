import Link from 'next/link'

const CommentContainer = () =>{
    return(
        <div className='text-sm mb-4'>
            <div className='flex' id='user'>
                <div className='size-8 bg-black mr-2 rounded-full' id='pfp'></div>
                <a className='font-medium' id='username'>Username</a>
                
            </div>
            <div className='ml-10'>
                Lorem ipsum
            </div>
        </div>
    )
}

export default CommentContainer