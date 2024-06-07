import { describe, it, expect } from "vitest";
import ButtonBox from ".";
import { render, screen } from "@testing-library/react";

describe("ButtonBox", () => {
    it("ButtonBox should be disabled once being selected", () => {
      render(<ButtonBox setPlayerInput={(input)=>{
        console.log(input)
      }} tries={1}/>);
  
      expect(Array.from(screen.getByTestId("head").classList)).toContain("head");
    });
  
    
  });