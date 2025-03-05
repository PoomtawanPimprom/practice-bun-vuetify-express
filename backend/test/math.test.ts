import { describe, expect, test } from "bun:test";

describe("group 1",()=>{
    test("4+4 success case 1",()=>{
        expect(4+4).toBe(8)
    })
    test("4+4 success case 2",()=>{
        expect(4+4).toBe(8)
    })
    test("4+4 success case 3",()=>{
        expect(4+4).toBe(8)
    })
    test("4+4 fail case 1",()=>{
        expect(4+4).toBe(9)
    })
    test("4+4 fail case 2",()=>{
        expect(4+4).toBe(9)
    })
    test("4+4 fail case 3",()=>{
        expect(4+4).toBe(9)
    })
})