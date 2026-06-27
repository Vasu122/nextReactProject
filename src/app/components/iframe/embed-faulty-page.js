"use client"

import Image from "next/image";
import React from "react";

export const EmbedFaultyPage = () => {
    return (
        <>
            <h3>Form Submission Section</h3>

            <Image src="./assets/img/services.jpg" width="300" height="150" alt="submission" />

                <p className="low-contrast"> 
                    This is a very low contrast text that visually impaired users cannot read.
                </p>

                <form>

                    <input type="email" id="user-email" placeholder="Enter email" />

                    <input type="text" placeholder="Enter your full name without label structure" />

                    <input type="password" id="pass" aria-describedby="non-existent-error-id" />

                    <a href="/terms">Click here</a>
                    <button type="submit"></button> </form>

                <a href=""></a>
                <div className="backg">
                    Hi i m rabindra singh , currently i am checking color contrast issues.
                </div>
            </>
    )}