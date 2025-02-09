import React, { useState } from 'react'
import TagInput from '../../components/Input/TagInput'
import { MdClose } from 'react-icons/md';


const AddEditNotes = ({onClose}) => {

    const [title, settitle] = useState("");
    const [content, setcontent] = useState("")
    const [tags, setTags] = useState([])

    return (
        <div className='relative'>
            <button
            onClick={onClose}
            className='w-10 h-10 rounded-full flex items-center justify-center absolute -top-3 -right-3 hover:bg-slate-50'>
                <MdClose className='text-xl text-slate-400' />
            </button>

            <div className='flex flex-col gap-2'>
                <label className='input-label'>TITLE</label>
                <input type="text"
                    className='text-2xl text-slate-950 outline-none'
                    placeholder='Go To Gym At 5'
                    value={title}
                    onChange={({ target }) => settitle(target.value)} />
            </div>

            <div className='flex flex-col gap-2 mt-4'>
                <label htmlFor="input-label">CONTENT</label>
                <textarea
                    type="text"
                    className='text-sm text-slate-950 outline-none bg-slate-50 p-2 rounded '
                    placeholder='Content'
                    rows={10}
                    value={content}
                    onChange={({ target }) => setcontent(target.value)} />
            </div>

            <div className='mt-3'>
                <label className='input-label'>TAGS</label>
                <TagInput tags={tags} setTags={setTags} />
            </div>

            <button className='btn-primary font-medium mt-5 p-3'>ADD</button>

        </div>
    )
}

export default AddEditNotes
