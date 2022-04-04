# facerecognitionbrain-BackEnd
Backend files for the facerecognitionbrain repository

## Existing Routes

1-The main Route ("/") -- it's just to checking the status of the server

2-the register route ("/register") it's used to make new users and save them into the mongodb database after hashing their password

3-the signin route ("/signin") it's used to compare the user's data with the data in the database,And it will send back the result which it will be a user object in case of finding a matching data or an error message

4-imageUrl route ("/imageUrl") it takes an image url from the user and send it back to the clarifi Api to check whether or not the image has faces in it,After that the front end will recieve the faces info and trigger the ("/image") route which is used to update the user's rank.
--(user rank:how many faces did the user check)

## Tools Used here

mongodb for creating and deloying the database
mongoose to interact with the database
bycrypt to hash and compare the password
React to make the front-end

to check the front end please [click here](https://github.com/alQaisi/facerecognitionbrain)
