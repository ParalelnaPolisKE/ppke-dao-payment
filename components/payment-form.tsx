"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { ethers } from 'ethers';

import { Button } from "@/components/ui/button"
import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"

const ethAddressSchema = z.string()
    .refine((value) => ethers.utils.isAddress(value), {
        message: "Provided address is invalid. Please insure you have typed correctly.",
    });

const formSchema = z.object({
    polygonAddress: ethAddressSchema,
})

export function PaymentForm() {
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            polygonAddress: "",
        },
    })

    function onSubmit(values: z.infer<typeof formSchema>) {
        // Do something with the form values.
        // ✅ This will be type-safe and validated.
        console.log(values)
        formSchema.parse(values)
    }

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                <FormField
                    control={form.control}
                    name="polygonAddress"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Polygon address</FormLabel>
                            <FormControl>
                                <Input placeholder="Enter your Polygon address" {...field} />
                            </FormControl>
                            <FormDescription>
                                This is your Polygon address (you can get it by connecting your Metamask wallet).
                            </FormDescription>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <Button type="submit">Submit</Button>
            </form>
        </Form>
    )
}