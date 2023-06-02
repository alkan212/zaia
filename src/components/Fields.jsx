import clsx from 'clsx'

const formClasses =
  'block w-full appearance-none rounded-md border border-neutral-600 bg-neutral-800 px-3 py-2 text-gray-100 placeholder-gray-400 focus:border-indigo-500 focus:bg-zinc-900 focus:outline-none focus:ring-indigo-500 sm:text-sm'

function Label({ id, children }) {
  return (
    <label
      htmlFor={id}
      className="mb-3 block text-sm font-medium text-gray-300"
    >
      {children}
    </label>
  )
}

function Optionnal(){
  return (
    <span className='text-gray-400 ml-2'>*Optionnal</span>
  )
}

export function TextField({
  id,
  label,
  type = 'text',
  className = '',
  required,
  ...props
}) {

  return (
    
    <div className={className}>
      {label && <Label id={id}>{label}  {!required && <Optionnal />}</Label>}
      <input id={id} type={type} {...props} className={formClasses} />
    </div>
  )
}

export function SelectField({ id, label, className = '', ...props }) {
  return (
    <div className={className}>
      {label && <Label id={id}>{label}</Label>}
      <select id={id} {...props} className={clsx(formClasses, 'pr-8')} />
    </div>
  )
}
