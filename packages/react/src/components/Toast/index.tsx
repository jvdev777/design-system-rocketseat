import React, { ComponentProps, ElementType } from "react"
import {
    ToastRoot,
    ToastProvider,
    ToastTitle,
    ToastDescription,
    ToastClose,
    ToastViewPort
} from "./styles"
import { X } from "phosphor-react"

export type ToastProps = ComponentProps<typeof ToastRoot> & {
    title: string
    description?: string
}

export function Toast({ title, description, ...props }: ToastProps) {
    return (
        <ToastProvider>
            <ToastRoot {...props}>
                <ToastTitle>{title}</ToastTitle>
                {description && <ToastDescription>{description}</ToastDescription>}
                <ToastClose>
                    <X weight="light" size={20} />
                </ToastClose>
            </ToastRoot>

            <ToastViewPort />
        </ToastProvider>
    )
}