import Link from 'next/link'

const OrderStatus = ({ status }) => {
    // status bisa "pending", "approved", atau "rejected"

    let bgColor = 'bg-slate-500'
    let textColor = 'text-white'
    let text = 'Pending Approval'

    if (status === 'complete') {
        bgColor = 'bg-green-500'
        textColor = 'text-white'
        text = 'Complete'
    } else if (status === 'rejected') {
        bgColor = 'bg-red-500'
        textColor = 'text-white'
        text = 'Cancelled'
    } else if (status == 'in-progress'){
        bgColor = 'bg-sky-400'
        textColor = 'text-white'
        text = 'In Progress'
    }

    return (
        <>
            <div className={`border px-4 ${bgColor} ${textColor} text-light rounded-md py-1 text-xs`}>
                {text}
            </div>
        </>
    )
}

export default OrderStatus
