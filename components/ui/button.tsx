import { cn } from '@/lib/utils'
import { Slot } from '@radix-ui/react-slot'
import { cva, type VariantProps } from 'class-variance-authority'
import * as React from 'react'

const buttonVariants = cva(
  'inline-flex items-center justify-center gap-2 whitespace-nowrap font-medium ring-offset-white transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-950 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50',
  {
    variants: {
      variant: {
        default:
          'bg-gradient-to-r from-blue-500 to-blue-600 text-white shadow-lg hover:shadow-blue-500/25 hover:translate-y-[-2px] active:translate-y-[0px] border border-blue-400',

        primary:
          'bg-gradient-to-r from-indigo-500 via-blue-500 to-cyan-500 text-white shadow-lg hover:shadow-blue-500/25 hover:translate-y-[-2px] active:translate-y-[0px] border border-blue-400 bg-[length:200%] hover:bg-right transition-all duration-500',

        secondary:
          'bg-slate-100 text-slate-900 hover:bg-slate-200/90 shadow-lg hover:shadow-slate-200/25 hover:translate-y-[-2px] active:translate-y-[0px] border border-slate-200',

        outline:
          'border-2 border-blue-500 text-blue-500 hover:bg-blue-50 shadow-sm hover:shadow-lg hover:shadow-blue-500/10 hover:translate-y-[-2px] active:translate-y-[0px] backdrop-blur-sm',

        ghost:
          'text-slate-900 hover:bg-slate-100/50 hover:text-slate-900 backdrop-blur-sm',

        link: 'text-blue-500 underline-offset-4 hover:underline hover:text-blue-700',

        gradient:
          'relative overflow-hidden bg-white text-slate-900 shadow-lg hover:shadow-blue-500/25 hover:translate-y-[-2px] active:translate-y-[0px] border border-slate-200',

        modern:
          'bg-white text-slate-900 border border-slate-200 shadow-lg hover:shadow-xl hover:translate-y-[-2px] active:translate-y-[0px] backdrop-blur-sm',
      },
      size: {
        default: 'h-11 px-5 py-2 rounded-lg text-sm',
        sm: 'h-9 px-4 rounded-md text-xs',
        lg: 'h-12 px-8 rounded-xl text-base',
        xl: 'h-14 px-10 rounded-2xl text-lg',
        icon: 'h-11 w-11 rounded-lg',
        pill: 'h-11 px-6 rounded-full text-sm',
        'pill-lg': 'h-14 px-8 rounded-full text-base',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : 'button'
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = 'Button'

export { Button, buttonVariants }
