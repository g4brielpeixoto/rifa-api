--USER--
id: uuid
name: string
pix: string

--RAFFLE--
id: uuid
owner_id: uuid
title: string
decription: string
picture_url: string
number_of_tokens: number

--RAFFLE-PARTICIPANTS--
raffle_id: uuid
user_id: uuid
tokens: array